import React, { useEffect, useState } from "react";
import Spinner from "../../../user/utils/Spinner";
import axios from "axios";
import { ENDPOINTS } from "../../../endpoint";
import { Modal, Button } from "react-bootstrap";

const AdTxHistory = () => {
  const [adHistory, setAdHistory] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const limit = 10; // Number of records per page

  useEffect(() => {
    const getHistory = async (page) => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${ENDPOINTS.baseUrl}/adtxhistory`, {
          params: { page, limit }
        });
        if (response.data.msg === "success") {
          setAdHistory(response.data.records);
          setTotalPages(response.data.totalPages);
          setCurrentPage(response.data.currentPage);
        } else {
          setError("Failed to fetch history.");
        }
      } catch (error) {
        setError("Error fetching history.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getHistory(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleViewDetails = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTransaction(null);
  };

  return (
    <div className='m-5'>
      <p className="h3 text-white card-header">Most Recent History</p>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">SN</th>
            <th scope="col">Txtype</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">CreatedAt</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="6"><Spinner /></td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="6" className="text-danger">{error}</td>
            </tr>
          ) : adHistory.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-muted">No history available.</td>
            </tr>
          ) : (
            adHistory.map((entry, index) => (
              <tr key={index}>
                <td>{(currentPage - 1) * limit + index + 1}</td>
                <td>{entry.txType}</td>
                <td>{entry.txAmount}</td>
                <td>{entry.status.toString()}</td>
                <td>{new Date(entry.createdAt).toLocaleString()}</td>
                <td>
                  <div className="dropdown">
                    <button className="btn btn-primary rounded dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Actions
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a className="dropdown-item active" href="#" onClick={() => handleViewDetails(entry)}>
                          View Details
                        </a>
                      </li>
                      <li><a className="dropdown-item" href="#">Resolve Dispute</a></li> 
                    </ul>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        <button className="bg-primary text-white border-0 fw-bold rounded" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button className="bg-primary text-white border-0 fw-bold rounded" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Transaction Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTransaction ? (
            <>
              <p><strong> FAZVAS User Details</strong></p>
              <p><strong>Full Name:</strong> {selectedTransaction.user?.fullName || "N/A"}</p>
              <p><strong>Transaction Type:</strong> {selectedTransaction.txType}</p>
              <p><strong>Amount:</strong> {selectedTransaction.txAmount}</p>
              <p><strong>Status:</strong> {selectedTransaction.status.toString()}</p>
              <p><strong>Created At:</strong> {new Date(selectedTransaction.createdAt).toLocaleString()}</p>
              <p><strong>User ID:</strong> {selectedTransaction.userId}</p>
              {/* Add more fields as needed */}
            </>
          ) : (
            <p>No transaction selected.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdTxHistory;
