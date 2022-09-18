const Top=()=>{

    

    return(
        <section className="Right-section">
            <h2>Active Deposits<span className="num">2</span></h2>
            <table>
                <thead>
                <tr>
                   <th>Property</th>
                   <th>Move in Date</th>
                   <th>Rent</th>
                   <th>Deposite</th>
                   <th>Status</th>
                    
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>771 Lost Round</td>
                    <td>21 February 2020</td>
                    <td>$3000</td>
                    <td>$9000</td>
                    <td>Awating bank processing</td>
               
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td>1491 jagged Arbor </td>
                    <td>12 March 2020</td>
                    <td>$2300</td>
                    <td>$4600</td>
                    <td>Payment Proceed</td>
                
                </tr>
                </tfoot>
            </table>
            <button>All active deposite</button>
        </section>
    )
}
export default Top;