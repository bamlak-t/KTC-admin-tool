import './tables.css';
import TextField from '@material-ui/core/TextField';
import { API, graphqlOperation } from 'aws-amplify';
import { listNotices } from '../../graphql/queries';
import { createNotice, updateNotice } from '../../graphql/mutations';
import { useEffect, useState } from 'react';

import AddNotice from './AddNotice'

const Notice = (props) => {
    const [openNotice, setOpenNotice] = useState(false);

    const [nameInput, setName] = useState("");
    const [dataInput, setData] = useState("");
    const [dbRowID, setDbRowID] = useState("");
    const [noticeJSON, setNoticeJSON] = useState([]);
    const [edit, setEdit] = useState(null);
    const [updateObj, setUpdateObj] = useState({
            name: "",
            data: ""
    });

    const GetNotices = async() => {
        try {
            const response = (await API.graphql(graphqlOperation(listNotices, {
                filter: {
                    year_group: {
                            eq: props.year_group
                    }
                }
            })));
            // console.log("response",response.data)
            const noticeList = response.data.listNotices.items[0].notices; 
            setDbRowID(response.data.listNotices.items[0].id);
            // console.log(noticeList)
            setNoticeJSON(noticeList);

        } catch(e) {
            console.log("error fetching data: ",e);
        }

    }
 
    const EditRow = (rowID) => {
        console.log("make changes", rowID)
        setEdit(rowID);
        const tempUpdate = { name:noticeJSON[rowID].name, data:noticeJSON[rowID].data }
        setUpdateObj(tempUpdate);
    }

    const SaveEdit = (rowID) => {
        console.log("made changes", updateObj)
        const tempUpdate = [];
        Object.keys(noticeJSON).map((cell) => {
                console.log(cell, rowID)

                if (cell === rowID) {
                    console.log(updateObj.name)
                    if (updateObj.name !== "") {   // only add the data if the notice has a name
                        tempUpdate.push({cellID:cell.toString(), name:updateObj.name, data: updateObj.data, time: noticeJSON[cell].time})
                    }
                } else {
                    tempUpdate.push({cellID:cell.toString(), name:noticeJSON[cell].name, data: noticeJSON[cell].data, time: noticeJSON[cell].time})
                }
                return <></>
            }
        )
        setNoticeJSON(tempUpdate, setEdit(null) );
    }

    useEffect(() => {
        GetNotices();
    }, []);

    const handleName = event => {
        setName(event.target.value);
    };

    const handleData = event => {
        setData(event.target.value);
    };

    const handleClickOpen = () => {
        setOpenNotice(true)    
        // console.log(noticeDisplay)
    };

    const handleClose = () => {
        setOpenNotice(false)    
    };

    const handleUpdate = (text, field) => {
        console.log(text, " ", field)
        let tempUpdate = updateObj;
        if (field === "n") {
            tempUpdate.name = text;

        } else if (field === "d") {

            tempUpdate.data = text;
        }
        setUpdateObj(tempUpdate)

    };

    const handleAdd = () => {
        // console.log(noticeJSON)
        const timeInput = new Date().toLocaleString();
        // console.log(typeof(timeInput))
        const newNotice = {cellID:"x", name:nameInput, data:dataInput, time:timeInput};
        noticeJSON.unshift(newNotice);

        const indexNotices = [];
        Object.keys(noticeJSON).map((cell) => {
                indexNotices.push({cellID:cell.toString(), name:noticeJSON[cell].name, data: noticeJSON[cell].data, time: noticeJSON[cell].time})
                return <></>
            }
        )
        setNoticeJSON(indexNotices, handleClose() );
    };

    const confirmChanges = () => {
        // indexNotices()
        API.graphql(graphqlOperation(updateNotice, {input: {id:dbRowID, notices:noticeJSON}}))
        .catch((err) => console.log("Error saving changes: ", err))
        .finally(() => console.log("changes saved"));
    }
    

    return (
        <>
            <div className="display-table-container" >
                <table className="display-table">
                    <tr className="table-header">
                        <td className="table-title" colSpan="2"> <h2>Notice Table</h2> </td>
                        <td>
                            <button className="table-save" className="row-buttons-save" onClick={confirmChanges}> Save </button>
                        </td>
                    </tr>
                    <tr className="second-notices">
                        <td colSpan="3">
                            <button className="add-button" onClick={handleClickOpen}> Add Notice + </button>
                        </td>
                    </tr>
                    <tr className="display-titles">
                        <th style={{width: "20%"}}>
                            Title
                        </th>
                        <th>
                            Message
                        </th>
                        <th>
                            Date sent
                        </th>
                    </tr>
                    {/* < FormatNotice /> */}
                    {/* {noticeDisplay} */}
                    {noticeJSON.map((message) => {
                        if (edit === message.cellID) {
                            return <tr onDoubleClick={() => SaveEdit(message.cellID)} key={message.cellID} className="all-row-data" >
                                <td> 
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Name"
                                        fullWidth 
                                        multiline
                                        rows={4}
                                        defaultValue={message.name}
                                        variant="outlined"
                                        onChange={(event) => handleUpdate(event.target.value, "n" )}
                                    /> 
                                </td>
                                <td> 
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Data"
                                        fullWidth 
                                        multiline
                                        rows={4}
                                        defaultValue={message.data}
                                        variant="outlined"
                                        onChange={(event) => handleUpdate(event.target.value, "d" )}
                                    />  
                                </td>
                                <td> {message.time} </td>
                            </tr>
                        } else {
                            return <tr onDoubleClick={() => EditRow(message.cellID)} key={message.cellID} className="all-row-data" >
                                <td> {message.name} </td>
                                <td> {message.data} </td>
                                <td> {message.time} </td>
                            </tr> 
                        }
                    })}
                </table>
            </div>
            <AddNotice open={openNotice} handleClose={handleClose} handleAdd={handleAdd} setName={handleName} setData={handleData}/>
        </>
    );
}

export default Notice;