import css from './TransactionHistory.module.css';
import clsx from 'clsx';

export default function Transaction({items}) {
    return (
        <div>
            <table className={clsx(css.tableContainer)}>
                <thead className={clsx(css.headTable)}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
                </thead>

                <tbody className={clsx(css.tableBody)}>
                {items.map(item => {
                    return (
                        <tr className={clsx(css.textTableBody)} key={item.id}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}