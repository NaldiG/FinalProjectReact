import React from 'react'

const Pagination = ({itemsPerPage, totalItems, paginate}) => {

    const pageNumbers = []
    

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pageNumbers.push(i)
        
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a style={{width: 70}} onClick={e => paginate(e, number)} href="!#" className="page-link text-danger text-center">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
