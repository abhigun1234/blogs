import React from 'react';
import "./Task.css"
function Task(props) {
    function clickMe(str){

        alert("hello")
        console.log("hello",str)
    }
    return (
        <div>
            <div className='outer-container'>
                <div className='container'>
                    <h1>Tasks</h1>
                    <div className='create-button-container'>
                        <button className='button create-button'> <i className="fa fa-calendar-plus"></i>
                            &nbsp;&nbsp;
                            Create</button>

                    </div>
                    <div className='new-task-container'>
                        <h4 className='new-task-title'>
                            New Task
                        </h4>
                        {/*
                    form group start here
                   */}
                        <div className='form-group'>
                            <label className='form-label' htmlFor='task-title'>
                                Task Title:
                            </label>
                            <div className='form-input'>
                                <input type="text" placeholder='Task Title' className='text-box'></input>
                            </div>

                        </div>
                        {/*
                    form group end here
                   */}
                        {/*
                    form group start here
                   */}
                        <div className='form-group'>
                            <label className='form-label' htmlFor='task-title'>
                                Task Date And Time:
                            </label>
                            <div className='form-input'>
                                <input type="datetime-local" placeholder='Task Title' className='text-box' id="task-date-time"></input>
                            </div>

                        </div>
                        {/*
                    form group end here
                   */}
                        <div className='button-group'>
                            <button onClick={()=>clickMe("raju")} className='button save-button'><i className="fa fa-save"></i>
                                &nbsp;&nbsp;Save Task</button>
                            <button className='button save-button'><i className="fa fa-window-plus"></i>
                                &nbsp;&nbsp;Cancel Task</button>
                        </div>
                    </div>
                    <div className='search-box'>
                        <input type="search" placeholder='Search'>

                        </input>
                        <i className='fa fa-search'></i>

                    </div>
                    <div className='content-body'>
                        {/*
                   task starts
                   */}
                        <div className='tasks'>

                            <div className='task-body'>
                             <div className='task-title'>

                                <span className='task-title-text'>Bob</span>
                             </div>
                             <div className='task-subtitle'>

                                <span className='task-title-text'>Sub title</span>
                             </div>
                            </div>
                        </div>
                        {
                            /*
                            task ends
        
                            */
                        }
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Task;