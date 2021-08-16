import { useEffect, useState } from 'react';
import './tables.css';

// import { API, graphqlOperation } from 'aws-amplify';
// import { createNotice, updateNotice, createHomework, updateHomework, createTimetable, updateTimetable } from '../graphql/mutations';

const Notice = (props) => {

    const [noticeList, setNoticeList] = useState();

    const [noticesFormat, setNoticesFormat] = useState();

    const confirmChanges = () => {
        console.log("changes made");
    }

    const addNotice = () => {
        console.log("add notice");
    }
    
    useEffect(() => {
        const notices = [{"cellid":1, msg:"messag1"}, {"cellid":2, msg:"messag2"}, {"cellid":3, msg:"message3"}, {"cellid":4, msg:"messag2"}, {"cellid":5, msg:"messag2"}, {"cellid":6, msg:"messag2"}, {"cellid":7, msg:"messag2"}, {"cellid":8, msg:"messag2"}]
        setNoticeList(notices)      

        const allNotices = notices.map((message) => <tr className="all-notices" key={message.cellid}>
                                                        <td> {message.cellid} {message.msg} </td>
                                                        <td> {message.cellid} {message.msg} </td>
                                                        <td> {message.cellid} {message.msg} </td>

                                                    </tr>)
        setNoticesFormat(allNotices);
    }, []);
    



    return (
        <table className="notice-table">
            <tr  className="top-notices">
                <th colSpan="2"> <h2>{props.tableTitle} Table</h2> </th>
                <td>
                    <button className="row-buttons-save" onClick={confirmChanges}> Save </button>
                </td>
            </tr>
            <tr className="second-notices">
                <td colSpan="3">
                    <button className="add-button" onClick={addNotice}> Add Notice + </button>
                </td>
            </tr>
            <tr>
                <th>
                    Date sent
                </th>
                <th>
                    Title
                </th>
                <th>
                    Message
                </th>
            </tr>
            <tbody className="table-container">
                { noticesFormat }
            </tbody>

            
        </table>
    );
}

export default Notice;