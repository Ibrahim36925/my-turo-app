// import { DatePicker ,TimePicker,Button,Input } from 'antd';
// import dayjs from "dayjs";
// import { SearchOutlined } from "@ant-design/icons";
// const onChange = (date, dateString) => {
//     console.log(date, dateString);
  // };
  // import search from '../img/search.png'
  // import { UserOutlined } from '@ant-design/icons';
  import { Input,DatePicker,    TimePicker  } from 'antd';
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
export default ()=> {
    return(
      // <div class="banner">
      //  <div class="search-form ">
      //  <div class="row ml-5">
      //   <div class="col-md-6 col-lg-6 col-12">
      //   <p className="form-text">Where</p>
      //   <input className="form-text2" placeholder="City, airport address or hotel"/>
   
      //   </div>
      //  </div>
      //   </div>
      //   </div>
      <div id='posterdiv'>
      <div id='inputsdiv'> 
      <div className='mainparentdiv'>

        <lable className='wherelabel'>Where</lable>
        {/* <input type='test'/> */}
        <Input className='whereinputsearch' size="small" placeholder="City, airport, address or hotel"  />
      </div>
      <div classname="inputparentdiv"></div>
      <div className='inputchilddiv'>
        <lable className='wherelabel'>from</lable>
        <div className='dateTime'>

        <DatePicker className='whereinput' size="small" onChange={onChange} />
        <TimePicker className='whereinput' size="small" onChange={onChange} />
        </div>
        
      </div>
      <div className='parentdiv'>
        <lable className='wherelabel'>until</lable>
        <div className='dateTime'>

        <DatePicker className='whereinput' size="small" onChange={onChange} />
        <TimePicker className='whereinput' size="small" onChange={onChange} />
        </div>

      </div>
         <button className='search-btn-section'>
      
          <svg className='icon' width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="searchIconLabel"  role="img" version="1.1"><path d="M20.75 21.52a.62.62 0 0 1-.44-.18l-6.11-6.11a.627.627 0 0 1-.18-.45c0-.17.07-.33.19-.45l.08-.07c2.51-2.51 2.51-6.61-.01-9.12-2.52-2.52-6.62-2.52-9.13 0-2.52 2.52-2.52 6.62 0 9.13a6.471 6.471 0 0 0 6.29 1.66c.34-.09.68.1.77.44.09.33-.1.68-.44.77-2.67.74-5.55-.02-7.51-1.98-3-3.01-3-7.9 0-10.9s7.9-3.01 10.9 0c2.88 2.88 3 7.5.35 10.52l5.68 5.68c.24.24.24.64 0 .88a.62.62 0 0 1-.44.18Z" fill="#ffffff"></path></svg>
 
         </button>
        

      </div>
      
    </div>
  )
}
 
 {/* <div className="row ">
    <div className="col-md-2"></div>
          <div className="col-md-8"> */}
    {/* <div className="search-form"> */}
        

            {/* <div className="search-form mt-3">
     
                    <div className="form-p">
        <p className="form-text">Where</p>
        <input className="form-text2" placeholder="City, airport address or hotel"/>
    </div> */}
    
                {/* <label className="label_Size">Where</label>
                <br />
                <Input
                  size="default"
                  placeholder="City, airport, address or hotel"
                  className="upperInput"
                />
              </div> */}
              {/* <div className="From">
                <label className="label_Size">From</label>
                <br />
                <DatePicker className="date-picker"  onChange={onChange} />
                <TimePicker className="time-picker"
                  onChange={onChange}
                  defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                />
              </div>
              <div className="Until">
                <label className="label_Size">Until</label>
                <br />
                <DatePicker className="date-picker" onChange={onChange} />
                <TimePicker className="time-picker"
                  onChange={onChange}
                  defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                />
              </div>
              <Button
             shape="circle"
                icon={<SearchOutlined />}
                className="search-btn"
              />
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div> */}
      
    {/* <div className="form-p">
        <p className="form-text">Where</p>
        <input className="form-text2" placeholder="City, airport address or hotel"/>
    </div>

    <div className="date-time-picker">
    <p className="date-p">From</p>
    
     <DatePicker className="date-picker"  className="date-picker"/>
      

    </div>
    <div className='time-picker'>
     <TimePicker className="time-picker" />
     </div>  */}
    {/* </div> */}
 



 