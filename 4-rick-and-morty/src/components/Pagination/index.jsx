import React from "react";

const Pagination = (props) => {
  const { page, setPage } = props;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-evenly">
        <li className="page-item">
          {/* Al hacer click en el botón 'Previous', se resta 1 al valor de 'page'   */}
          <button className="page-link" onClick={() => setPage(page - 1)}>
            Previous
          </button>
        </li>
        <li className="page-item">
          <button className="page-link">{page}</button>
        </li>
        <li className="page-item">
            {/* Al hacer click en el botón 'Next', se suma 1 al valor de 'page' */}
          <button className="page-link" onClick={() => setPage(page + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
