import React  from 'react';
import './ClearHistoryStyle.css';
import CalculationList from './CalculationList.js';
import './CalculationList.css';




class ClearHistoryScreen extends React.Component{

       render() {
            return(
              <div>
                     <div className='container'>
                     <CalculationList> </CalculationList>
                     </div>
                    
                     <button class="btn btn-primary" type="reset" value="Reset">ClearHistory</button>
                     <div>
                      <i class="fas fa-arrow-alt-circle-left"></i>
                     </div>
                    
                     </div>
                     
                     )
                
        }
      
        
};



export default ClearHistoryScreen;