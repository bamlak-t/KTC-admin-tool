import './components.css';

import { useState } from 'react';

import Notice from './tables/Notice'
import Homework from './tables/Homework'
import Timetable from './tables/Timetable'


const TableNavigation = () => {

    const [yearGroup, setYearGroup] = useState(1);
    const [title, setTitle] = useState("Notice");


    const displayTable = (yearNumber) => {
        console.log(yearNumber, title);
        setYearGroup(yearNumber)
    }

    const years = [1,2,3,4,5,6,7,8,9,10,11]
    const allYears = years.map( (year) => {
        if (year === yearGroup) {
            return (
                <td key={year} className="row-items">
                    <button style={{backgroundColor: "#50eb79"}}
                        className="row-buttons" 
                        onClick={() => displayTable(year)}> Year {year} 
                    </button>
                </td>)
        } else {
            return (
            <td key={year} className="row-items">
                <button 
                    className="row-buttons" 
                    onClick={() => displayTable(year)}> Year {year} 
                </button>
            </td>)
        }})

    const tableNames = ["Notice", "Timetable", "Homework"]

    const allTableNames = tableNames.map( (name) => {
        if (name === title) {
            return (
                <button key={name} style={{backgroundColor: "#50eb79"}} onClick={() => setTitle(name)}>{name}</button>
            )
        } else {
            return (
                <button key={name} onClick={() => setTitle(name)}>{name}</button>
            )
        }})

    const Table = () => {
        if (title === "Notice") {
            return <Notice year_group={yearGroup} />;
        } else if (title === "Timetable") {
            return <Timetable year_group={yearGroup} />;
        } else if (title === "Homework") {
            return <Homework year_group={yearGroup} />
        }
    }

    return (
        <>
            <table className="main-table">
                <tbody>
                    <tr className="main-row">
                        { allYears }
                    </tr>
                </tbody>

                <tr className="table-nav">
                    <td>
                        {allTableNames}
                
                    </td>

                </tr>
                
                
            </table>
            <Table />
        </>
    );
}

export default TableNavigation;