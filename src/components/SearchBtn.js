import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
import {InputGroup} from 'react-bootstrap'
import { FaBeer} from 'react-icons/fa'
import { MdSearch } from "react-icons/md";
import Btnsearch from './Btnsearch.css'
 const text = "Search Here";

function SearchBtn() {
    return (
  <div className="sbtn">
    <InputGroup className="mb-2">
          <FormControl
            id="form"
            placeholder={text}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
        
          />
        <div className='btns'>
         <Button variant="success" id="button-addon2">
             <a><MdSearch/></a>
          </Button>
        </div>
  </InputGroup>
  </div>
    )
}

export default SearchBtn
