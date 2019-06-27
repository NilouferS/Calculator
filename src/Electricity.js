import React, {Component} from 'react';

class Electricity extends Component{
    constructor(props) {
        super(props);
        this.state={unitsUsed: 0,
                    current: props.current,
                    electricityAmount: 0

        };
    }
    electricityUsed(e){
        this.setState({unitsUsed: e.target.value - 11000}, () => this.electricityAmount())
      
     }
     electricityAmount(e){
         console.log(this.state.unitsUsed);
         this.setState({electricityAmount: (((100 * 10) + ((this.state.unitsUsed - 100) * 20))/100) });
     }

    render() {
        let {unitsUsed, current, electricityAmount} = this.state;
        return(

            <div className='container'>
                <div className='item'>
                    <label className='heading'>Enter the Electricity meter readings: </label>
                    <input 
                        type='text'
                        placeholder = {current}
                        onChange = {(e) => this.electricityUsed(e)}
                     />
                    <label className='heading'>The Electricity unit used: </label>  
                    <label className='label'>
                        {unitsUsed}
                    </label>
                    <label className='heading'>Electricity Bill Amount: £ </label>
                    <label className='label'
                        placeholder = {electricityAmount} 
                    >
                        {electricityAmount.toFixed(2)}
                    </label>
                
                </div>
            
            </div>
        );
    }

}
export default Electricity;