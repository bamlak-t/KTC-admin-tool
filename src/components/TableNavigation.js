import './components.css';
import { AmplifySignOut } from '@aws-amplify/ui-react';

import { API, graphqlOperation } from 'aws-amplify';
import { createNotice, updateNotice, createHomework, updateHomework, createTimetable, updateTimetable } from '../graphql/mutations';
import { useState } from 'react';

import Notice from './tables/Notice'

const TableNavigation = () => {

    const [yearGroup, setYearGroup] = useState(1);
    const [title, setTitle] = useState("Notice");


    const displayTable = (yearNumber) => {
        console.log(yearNumber);
    }

    const confirmChanges = (yearNumber) => {
        console.log("changes made");
    }

    const years = [1,2,3,4,5,6,7,8,9,10,11]

    return (
        <div className="">
            <table className="main-table">
                <tr className="main-row">
                    { years.map(
                        (year) => <td key={year} className="row-items">
                                    <button 
                                            className="row-buttons" 
                                            onClick={() => displayTable(year)}> Year {year} 
                                    </button>
                                </td>

                    )}
                </tr>
                <tr>
                    <button onClick={() => setTitle(Notice)}>Notice</button>
                </tr>
            </table>
            <Notice tableTitle={title} />
        </div>
    );
}

export default TableNavigation;