import React, { useEffect, useState } from "react";
import Spinner from "../../utils/Spinner";
import axios from "axios";
import { ENDPOINTS } from "../../../endpoint";
import { Modal, Button } from "react-bootstrap";

const History = () => {
  const [history, setHistory] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showModal, setShowModal] = useState(false);

  let user = localStorage.getItem("fazUser");
  user = JSON.parse(user);

  useEffect(() => {
    const getHistory = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${ENDPOINTS.baseUrl}/userhistory`, {
          params: {
            userId: user._id,
            page: currentPage,
            limit: 10
          }
        });

        console.log(response);
        if (response.data.msg === "success") {
          setHistory(response.data.records);
          setTotalPages(response.data.totalPages);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getHistory();
  }, [currentPage, user._id]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
    <>
      <div className="m-5">
        <p className="h3 text-dark card-header">Most Recent History</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">SN</th>
              <th scope="col">Txtype</th>
              <th scope="col">txAmount</th>
              <th scope="col">status</th>
              <th scope="col">createdAt</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="6">
                  <Spinner />
                </td>
              </tr>
            ) : (
              history?.sort((a,b)=> new Date(b.createdAt ) - new Date(a.createdAt )).map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{entry.txType}</td>
                  <td>&#8358;{entry.txAmount.toLocaleString('en-US')}</td>
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

                      </ul>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="pagination">
          <button 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Transaction Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTransaction && (
            <>
              <p><strong>Transaction Type:</strong> {selectedTransaction.txType}</p>
              <p><strong>Amount:</strong> &#8358;{selectedTransaction.txAmount.toLocaleString('en-US')}</p>
              <p><strong>Status:</strong> {selectedTransaction.status.toString()}</p>
              <p><strong>Created At:</strong> {new Date(selectedTransaction.createdAt).toLocaleString()}</p>
              <p><strong>User ID:</strong> {selectedTransaction.userId}</p>
              {/* Add more fields as needed */}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default History;
