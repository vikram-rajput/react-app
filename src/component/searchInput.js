import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    return (
      <div className="search-result container">
  
     <div className="row justify-content-center">
     <div className="col-12 col-md-10 col-lg-8">
         <form className="card card-sm">
             <div className="card-body row no-gutters align-items-center">
  
                 <div className="col">
                     <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search Books By title" />
                 </div>

                 <div className="col-auto">
                     <button className="btn btn-lg btn-success" type="submit">Search</button>
                 </div>

             </div>
         </form>
     </div>

 </div>
      </div>
    );
  }
}

export default SearchInput;