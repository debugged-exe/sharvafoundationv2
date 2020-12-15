import React,{useState}from "react";
import './JoinUs.css';
import 'tachyons';

const JoinUs = () => {

  const [name, setName] = useState("");
  const [nameFlag, setNameFlag] = useState(false);
  const [nameErr, setNameErr] = useState("");

  const setNameField = (event) => {
    setName(event.target.value);
  }

  const nameValidate = (event) => {
    if(name!=="")
    {
      setNameFlag(true);
      setNameErr("");
    }
    else
    {
      setNameFlag(false);
      setNameErr("*Name Field is compulsary");
    }
  }

  const [dob, setDob] = useState("");
  const [dobFlag, setDobFlag] = useState(false);
  const [dobErr, setDobErr] = useState("");

  const setDobField = (event) => {
    setDob(event.target.value);
  }

  const dobValidate = (event) => {
    if(dob!=="")
    {
      setDobFlag(true);
      setDobErr("");
    }
    else
    {
      setDobFlag(false);
      setDobErr("*DOB Field is compulsary");
    }
  }

  const [email, setEmail] = useState("");
  const [emailFlag, setEmailFlag] = useState(false);
  const [emailErr, setEmailErr] = useState("");

  const setEmailField = (event) => {
    setEmail(event.target.value);
  }

  const emailValidate = (event) => {
    // String regex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
    if(email==="")
    {
      setEmailFlag(false);
      setEmailErr("*Email Field is compulsary");
    }
    else if(!email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
    {
      setEmailFlag(false);
      setEmailErr("Invalid email.Enter valid email(eg: example@gmail.com)");
    }
    else
    {
      setEmailFlag(true);
      setEmailErr("");
    }
  }

  const [mobile, setMobile] = useState("");
  const [mobileFlag, setMobileFlag] = useState(false);
  const [mobileErr, setMobileErr] = useState("");

  const setMobileField = (event) => {
    setMobile(event.target.value);
  }

  const numericFilter = (event) => {
   event.target.value = event.target.value.replace(/[^\0-9]/ig, "");
}

  const mobileValidate = (event) => {
    if(mobile==="")
    {
      setMobileFlag(false);
      setMobileErr("Phone number field is compulsary");
    }
    else if(mobile.length!==10)
    {
      setMobileErr(false);
      setMobileErr("Enter valid phone no(eg: 9123456780)")
    }
    else
    {
      setMobileFlag(true);
      setMobileErr("");
    }
  }

  const [permAdd, setPermAdd] = useState("");
  const [permAddFlag, setPermAddFlag] = useState(false);
  const [permAddErr, setPermAddErr] = useState("");

  const setPermAddField = (event) => {
    setPermAdd(event.target.value);
  }

  const permAddValidate = (event) => {
    if(permAdd==="")
    {
      setPermAddFlag(false);
      setPermAddErr("Permanent Address Field is compulsary.");
    }
    else if(permAdd.length>200 || permAdd.length<20)
    {
      setPermAddFlag(false);
      setPermAddErr("Address must contain 20-200 characters.");
    }
    else
    {
      setPermAddFlag(true);
      setPermAddErr("");
    }
  }

  const [permCity, setPermCity] = useState("none");
  const [permCityFlag, setPermCityFlag] = useState(false);
  const [permCityErr, setPermCityErr] = useState("");

  const setPermCityField = (event) => {
    setPermCity(event.target.value);
  }

  const permCityValidate = () => {
    if(permCity==="none")
    {
      setPermCityFlag(false);
      setPermCityErr("*City field is compulsary");
    }
    else
    {
      setPermCityFlag(true);
      setPermCityErr("");
    }
  }

  const [permState, setPermState] = useState("none");
  const [permStateFlag, setPermStateFlag] = useState(false);
  const [permStateErr, setPermStateErr] = useState("");

  const setPermStateField = (event) => {
    setPermState(event.target.value);
  }

  const permStateValidate = () => {
    if(permState==="none")
    {
      setPermStateFlag(false);
      setPermStateErr("*State field is compulsary");
    }
    else
    {
      setPermStateFlag(true);
      setPermStateErr("");
    }
  }

  const [currAdd, setCurrAdd] = useState("");
  const [currAddFlag, setCurrAddFlag] = useState(false);
  const [currAddErr, setCurrAddErr] = useState("");

  const setCurrAddField = (event) => {
    setCurrAdd(event.target.value);
  }

  const currAddValidate = () => {
    if(currAdd==="")
    {
      setCurrAddFlag(false);
      setCurrAddErr("*Current Address Field is compulsary.");
    }
    else if(currAdd.length>200 || currAdd.length<20)
    {
      setCurrAddFlag(false);
      setCurrAddErr("Address must contain 20-200 characters.");
    }
    else
    {
      setCurrAddFlag(true);
      setCurrAddErr("");
    }
  }

  const [currCity, setCurrCity] = useState("none");
  const [currCityFlag, setCurrCityFlag] = useState(false);
  const [currCityErr, setCurrCityErr] = useState("");

  const setCurrCityField = (event) => {
    setCurrCity(event.target.value);
  }

  const currCityValidate = () => {
    if(currCity==="none")
    {
      setCurrCityFlag(false);
      setCurrCityErr("*City Field is compulsary");
    }
    else
    {
      setCurrCityFlag(true);
      setCurrCityErr("");
    }
  }

  const [currState, setCurrState] = useState("none");
  const [currStateFlag, setCurrStateFlag] = useState(false);
  const [currStateErr, setCurrStateErr] = useState("");

  const setCurrStateField = (event) => {
    setCurrState(event.target.value);
  }

  const currStateValidate = () => {
    if(currState==="none")
    {
      setCurrStateFlag(false);
      setCurrStateErr("*State field is compulsary");
    }
    else
    {
      setCurrStateFlag(true);
      setCurrStateErr("");
    }
  }

  const sameAddHandler = (event) => {
    const currentAddress = document.getElementById('currentAddress');
    const cur_city = document.getElementById('cur_city');
    const cur_state = document.getElementById('cur_state');
    if(event.target.checked)
    {
      setCurrAdd(permAdd);
      setCurrCity(permCity);
      setCurrState(permState);
      currentAddress.value = permAdd;
      cur_city.value = permCity;
      cur_state.value = permState;
    }
    else
    {
      setCurrAdd("");
      setCurrCity("none");
      setCurrState("none");
      currentAddress.value = "";
      cur_city.value = "none";
      cur_state.value = "none";
    }
  }

  const display = () => {
    currAddValidate();
    currCityValidate();
    currStateValidate();
  }

  const [blood, setBlood] = useState("none");
  const [bloodFlag, setBloodFlag] = useState(false);
  const [bloodErr, setBloodErr] = useState("");

  const setBloodField = (event) => {
    setBlood(event.target.value);
  }

  const bloodValidate = () => {
    if(blood==="none")
    {
      setBloodFlag(false);
      setBloodErr("*Blood group is compulsary");
    }
    else
    {
      setBloodFlag(true);
      setBloodErr("");
    }
  }

  const [category, setCategory] = useState("none");
  const [categoryFlag, setCategoryFlag] = useState(false);
  const [categoryErr, setCategoryErr] = useState("");

  const setCategoryField = (event) => {
    setCategory(event.target.value);
  }

  const categoryValidate = () => {
    if(category==="none")
    {
      setCategoryFlag(false);
      setCategoryErr("*Category is compulsary");
    }
    else
    {
      setCategoryFlag(true);
      setCategoryErr("");
    }
  }

  const [reason, setReason] = useState("");
  const [reasonFlag, setReasonFlag] = useState(false);
  const [reasonErr, setReasonErr] = useState("");

  const setReasonField = (event) => {
    setReason(event.target.value);
  }

  const reasonValidate = (event) => {
    if(reason==="")
    {
      setReasonFlag(false);
      setReasonErr("*Reason Field is compulsary.");
    }
    else if(reason.length>200 || reason.length<20)
    {
      setReasonFlag(false);
      setReasonErr("Reason must contain 20-200 characters.");
    }
    else
    {
      setReasonFlag(true);
      setReasonErr("");
    }
  }

  const [submitErr, setSubmitErr] = useState("");

  const submit = () => {
    if(
      nameFlag===true &&
      dobFlag===true &&
      emailFlag===true &&
      mobileFlag===true &&
      permAddFlag===true &&
      permCityFlag===true &&
      permStateFlag===true &&
      currAddFlag===true &&
      currCityFlag===true &&
      currStateFlag===true &&
      bloodFlag===true &&
      categoryFlag===true &&
      reasonFlag===true
      )
    {
      setSubmitErr("");
    }
    else
    {
      nameValidate();
      dobValidate();
      emailValidate();
      mobileValidate();
      permAddValidate();
      permCityValidate();
      permStateValidate();
      currAddValidate();
      currCityValidate();
      currStateValidate();
      bloodValidate();
      categoryValidate();
      reasonValidate();
      setSubmitErr("*Error.Check if all fields are filled completely.");
    }
  }

  return (
    <div className="backgroundjoinus mt6">
      <h1 className="f1 fw6">Join Us</h1>
      <div className="form-base" id="form">
        <h2>Personal Information</h2>
        <div className="margin">
          <div className="left1"> Name</div>
          <div className="center1">:</div>
          <div className="right1">
            <input
              className="input"
              type="text"
              name="name"
              autoComplete = "blej"
              onChange={(event) => setNameField(event)}
              onBlur={(event) => nameValidate(event)}
              placeholder="Enter your Name"
            />
          </div>
          <div className="f4 red">{`${nameErr}`}</div>
        </div>
        <div className="margin">
          <div className="left1"> DOB</div>
          <div className="center1">:</div>
          <div className="right1">
            <input
              className="input"
              type="date"
              name="DOB"
              autoComplete = "blej"
              onChange= {(event) => setDobField(event)}
              onBlur= {(event) => dobValidate(event)}
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div className="f4 red">{`${dobErr}`}</div>
        </div>
        <h2>Contact Information</h2>
        <div className="margin">
          <div className="left1"> Email Id</div>
          <div className="center1">:</div>
          <div className="right1">
            <input
              className="input"
              type="email"
              name="email"
              autoComplete = "blej"
              onChange = {(event) => setEmailField(event)}
              onBlur = {(event) => emailValidate(event)}
              placeholder="Enter your Email"
            />
          </div>
          <div className="f4 red">{`${emailErr}`}</div>
        </div>
        <div className="margin">
          <div className="left1">Phone Number</div>
          <div className="center1">:</div>
          <div className="right1">
            <input
              className="input"
              type="phone"
              name="phone"
              id="phone_no"
              onChange = {(event) => setMobileField(event)}
              onBlur = {(event) => mobileValidate(event)}
              onInput = {(event) => numericFilter(event)}
              autoComplete='blej'
              placeholder="Enter Contact Details"
            />
          </div>
          <div className="f4 red">{`${mobileErr}`}</div>
        </div>
        <div className="margin">
          <div className="text-box">
            <div className="left1">Permanent Address</div>
            <div className="center1">:</div>
            <div className="right1">
              <textarea
                className="input"
                id="permanentAddress"
                name="per_address"
                autoComplete="sanyu"
                onChange = {(event) => setPermAddField(event)}
                onBlur = {(event) => permAddValidate(event)}
              ></textarea>
            </div>
          </div>
          <div className="f4 red">{`${permAddErr}`}</div>
        </div>
        <div className="margin">
          <div className="left1">City</div>
          <div className="center1">:</div>
          <div className="right1">
            <select 
            className="citySelect" 
            id="city" 
            name="per_city"
            autoComplete="blej"
            onChange = {(event) => setPermCityField(event)}
            onBlur = {() => permCityValidate()}>
              <option value="none">-- Select City --</option>
              <option value="Adilabad"> Adilabad </option>
              <option value="Agartala"> Agartala </option>
              <option value="Agra"> Agra </option>
              <option value="Ahmedabad"> Ahmedabad </option>
              <option value="Ahmednagar"> Ahmednagar </option>
              <option value="Aizawl"> Aizawl </option>
              <option value="Ajmer"> Ajmer </option>
              <option value="Akola"> Akola </option>
              <option value="Alappuzha"> Alappuzha </option>
              <option value="Aligarh"> Aligarh </option>
              <option value="Alirajpur"> Alirajpur </option>
              <option value="Allahabad"> Allahabad </option>
              <option value="Almora"> Almora </option>
              <option value="Alwar"> Alwar </option>
              <option value="Ambala"> Ambala </option>
              <option value="Ambarnath"> Ambarnath </option>
              <option value="Ambedkar Nagar"> Ambedkar Nagar </option>
              <option value="Amrawati"> Amrawati </option>
              <option value="Amreli District"> Amreli District </option>
              <option value="Amritsar"> Amritsar </option>
              <option value="Amroha"> Amroha </option>
              <option value="Ambattur"> Ambattur</option>
              <option value="Anand"> Anand </option>
              <option value="Agartala"> Agartala </option>
              <option value="Anantapur"> Anantapur </option>
              <option value="Anantnag"> Anantnag </option>
              <option value="Angul"> Angul </option>
              <option value="Anjaw"> Anjaw </option>
              <option value="Anuppur"> Anuppur </option>
              <option value="Arrah"> Arrah </option>
              <option value="Asansol"> Asansol</option>
              <option value="Araria"> Araria </option>
              <option value="Ariyalur"> Ariyalur </option>
              <option value="Ashok Nagar"> Ashok Nagar </option>
              <option value="Auraiya"> Auraiya </option>
              <option value="Aurangabad"> Aurangabad </option>
              <option value="Adoni"> Adoni </option>
              <option value="Azamgarh"> Azamgarh </option>
              <option value="Badaun"> Badaun </option>
              <option value="Badgam"> Badgam </option>
              <option value="Bagalkot"> Bagalkot </option>
              <option value="Bageshwar"> Bageshwar </option>
              <option value="Bagpat"> Bagpat </option>
              <option value="Bahraich"> Bahraich </option>
              <option value="Balaghat"> Balaghat </option>
              <option value="Baleswar"> Baleswar </option>
              <option value="Ballia"> Ballia </option>
              <option value="Balrampur"> Balrampur </option>
              <option value="Banaskantha"> Banaskantha </option>
              <option value="Banda"> Banda </option>
              <option value="Bandipore"> Bandipore </option>
              <option value="Bangalore Rural District">
                {" "}
                Bangalore Rural District{" "}
              </option>
              <option value="Bangalore Urban District">
                {" "}
                Bangalore Urban District{" "}
              </option>
              <option value="Banka"> Banka </option>
              <option value="Bankura"> Bankura </option>
              <option value="Banswara"> Banswara </option>
              <option value="Barabanki"> Barabanki </option>
              <option value="Baramula"> Baramula </option>
              <option value="Baran"> Baran </option>
              <option value="Bardhaman"> Bardhaman </option>
              <option value="Bareilly"> Bareilly </option>
              <option value="Bargarh"> Bargarh </option>
              <option value="Barmer"> Barmer </option>
              <option value="Barpeta"> Barpeta </option>
              <option value="Barwani"> Barwani </option>
              <option value="Bastar"> Bastar </option>
              <option value="Basti"> Basti </option>
              <option value="Bathinda"> Bathinda </option>
              <option value="Beed"> Beed </option>
              <option value="Begusarai"> Begusarai </option>
              <option value="Belgaum"> Belgaum </option>
              <option value="Bellary"> Bellary </option>
              <option value="Betul"> Betul </option>
              <option value="Bhadrak"> Bhadrak </option>
              <option value="Bhagalpur"> Bhagalpur </option>
              <option value="Bhandara"> Bhandara </option>
              <option value="Bharatpur"> Bharatpur </option>
              <option value="Bharuch"> Bharuch </option>
              <option value="Bhavnagar"> Bhavnagar </option>
              <option value="Bhilwara"> Bhilwara </option>
              <option value="Bhind"> Bhind </option>
              <option value="Bhiwani"> Bhiwani </option>
              <option value="Bhojpur"> Bhojpur </option>
              <option value="Bhopal"> Bhopal </option>
              <option value="Bidar"> Bidar </option>
              <option value="Bijapur"> Bijapur </option>
              <option value="Bijnor"> Bijnor </option>
              <option value="Bikaner"> Bikaner </option>
              <option value="Bilaspur"> Bilaspur </option>
              <option value="Bilaspur"> Bilaspur </option>
              <option value="Birbhum"> Birbhum </option>
              <option value="Bishnupur"> Bishnupur </option>
              <option value="Bokaro"> Bokaro </option>
              <option value="Bolangir"> Bolangir </option>
              <option value="Bongaigaon"> Bongaigaon </option>
              <option value="Boudh"> Boudh </option>
              <option value="Bulandshahr"> Bulandshahr </option>
              <option value="Buldhana"> Buldhana </option>
              <option value="Bundi"> Bundi </option>
              <option value="Burhanpur"> Burhanpur </option>
              <option value="Buxar"> Buxar </option>
              <option value="Cachar"> Cachar </option>
              <option value="Central Delhi"> Central Delhi </option>
              <option value="Chamarajnagar"> Chamarajnagar </option>
              <option value="Chamba"> Chamba </option>
              <option value="Chamoli"> Chamoli </option>
              <option value="Champawat"> Champawat </option>
              <option value="Champhai"> Champhai </option>
              <option value="Chandauli"> Chandauli </option>
              <option value="Chandel"> Chandel </option>
              <option value="Chandigarh"> Chandigarh</option>
              <option value="Chandrapur"> Chandrapur </option>
              <option value="Changlang"> Changlang </option>
              <option value="Chatra"> Chatra </option>
              <option value="Chennai"> Chennai </option>
              <option value="Chhatarpur"> Chhatarpur </option>
              <option value="Chhindwara"> Chhindwara </option>
              <option value="Chikballapur"> Chikballapur </option>
              <option value="Chikmagalur"> Chikmagalur </option>
              <option value="Chitradurga"> Chitradurga </option>
              <option value="Chitrakoot"> Chitrakoot </option>
              <option value="Chittoor"> Chittoor </option>
              <option value="Chittorgarh"> Chittorgarh </option>
              <option value="Churachandpur"> Churachandpur </option>
              <option value="Churu"> Churu </option>
              <option value="Coimbatore"> Coimbatore </option>
              <option value="Cooch Behar"> Cooch Behar </option>
              <option value="Cuddalore"> Cuddalore </option>
              <option value="Cuttack"> Cuttack </option>
              <option value="Dahod"> Dahod </option>
              <option value="Dakshin Dinajpur"> Dakshin Dinajpur </option>
              <option value="Dakshina Kannada"> Dakshina Kannada </option>
              <option value="Daman"> Daman </option>
              <option value="Damoh"> Damoh </option>
              <option value="Dantewada"> Dantewada </option>
              <option value="Darbhanga"> Darbhanga </option>
              <option value="Darjeeling"> Darjeeling </option>
              <option value="Darrang"> Darrang </option>
              <option value="Datia"> Datia </option>
              <option value="Dausa"> Dausa </option>
              <option value="Davanagere"> Davanagere </option>
              <option value="Debagarh"> Debagarh </option>
              <option value="Dehradun"> Dehradun </option>
              <option value="Deoghar"> Deoghar </option>
              <option value="Deoria"> Deoria </option>
              <option value="Dewas"> Dewas </option>
              <option value="Dhalai"> Dhalai </option>
              <option value="Dhamtari"> Dhamtari </option>
              <option value="Dhanbad"> Dhanbad </option>
              <option value="Dhar"> Dhar </option>
              <option value="Dharmapuri"> Dharmapuri </option>
              <option value="Dharwad"> Dharwad </option>
              <option value="Dhemaji"> Dhemaji </option>
              <option value="Dhenkanal"> Dhenkanal </option>
              <option value="Dholpur"> Dholpur </option>
              <option value="Dhubri"> Dhubri </option>
              <option value="Dhule"> Dhule </option>
              <option value="Dibang Valley"> Dibang Valley </option>
              <option value="Dibrugarh"> Dibrugarh </option>
              <option value="Dimapur"> Dimapur </option>
              <option value="Dindigul"> Dindigul </option>
              <option value="Dindori"> Dindori </option>
              <option value="Diu"> Diu </option>
              <option value="Doda"> Doda </option>
              <option value="Dumka"> Dumka </option>
              <option value="Dungapur"> Dungapur </option>
              <option value="Durg"> Durg </option>
              <option value="East Delhi"> East Delhi </option>
              <option value="East Garo Hills"> East Garo Hills </option>
              <option value="East Godavari"> East Godavari </option>
              <option value="East Kameng"> East Kameng </option>
              <option value="East Khasi Hills"> East Khasi Hills </option>
              <option value="East Sikkim"> East Sikkim </option>
              <option value="Ernakulam"> Ernakulam </option>
              <option value="Erode"> Erode </option>
              <option value="Etah"> Etah </option>
              <option value="Etawah"> Etawah </option>
              <option value="Faizabad"> Faizabad </option>
              <option value="Faridabad"> Faridabad </option>
              <option value="Faridkot"> Faridkot </option>
              <option value="Farrukhabad"> Farrukhabad </option>
              <option value="Fatehabad"> Fatehabad </option>
              <option value="Fatehgarh Sahib"> Fatehgarh Sahib </option>
              <option value="Fatehpur"> Fatehpur </option>
              <option value="Firozabad"> Firozabad </option>
              <option value="Firozpur"> Firozpur </option>
              <option value="Gadag"> Gadag </option>
              <option value="Gadchiroli"> Gadchiroli </option>
              <option value="Gajapati"> Gajapati </option>
              <option value="Gandhinagar"> Gandhinagar </option>
              <option value="Ganganagar"> Ganganagar </option>
              <option value="Ganjam"> Ganjam </option>
              <option value="Garhwa"> Garhwa </option>
              <option value="Gautam Buddha Nagar"> Gautam Buddha Nagar </option>
              <option value="Gaya"> Gaya </option>
              <option value="Ghaziabad"> Ghaziabad </option>
              <option value="Ghazipur"> Ghazipur </option>
              <option value="Giridih"> Giridih </option>
              <option value="Goalpara"> Goalpara </option>
              <option value="Godda"> Godda </option>
              <option value="Golaghat"> Golaghat </option>
              <option value="Gonda"> Gonda </option>
              <option value="Gondiya"> Gondiya </option>
              <option value="Gopalganj"> Gopalganj </option>
              <option value="Gorkakhpur"> Gorkakhpur </option>
              <option value="Gulbarga"> Gulbarga </option>
              <option value="Gumla"> Gumla </option>
              <option value="Guna"> Guna </option>
              <option value="Guntur"> Guntur </option>
              <option value="Gurdaspur"> Gurdaspur </option>
              <option value="Gurgaon"> Gurgaon </option>
              <option value="Gwalior"> Gwalior </option>
              <option value="Hailakandi"> Hailakandi </option>
              <option value="Hamirpur"> Hamirpur </option>
              <option value="Hamirpur"> Hamirpur </option>
              <option value="Hanumangarh"> Hanumangarh </option>
              <option value="Harda"> Harda </option>
              <option value="Hardoi"> Hardoi </option>
              <option value="Haridwar"> Haridwar </option>
              <option value="Hassan"> Hassan </option>
              <option value="Haveri District"> Haveri District </option>
              <option value="Hazaribagh"> Hazaribagh </option>
              <option value="Hingoli"> Hingoli </option>
              <option value="Hissar"> Hissar </option>
              <option value="Hooghly"> Hooghly </option>
              <option value="Hoshangabad"> Hoshangabad </option>
              <option value="Hoshiarpur"> Hoshiarpur </option>
              <option value="Howrah"> Howrah </option>
              <option value="Hyderabad"> Hyderabad </option>
              <option value="Idukki"> Idukki </option>
              <option value="Imphal East"> Imphal East </option>
              <option value="Imphal West"> Imphal West </option>
              <option value="Indore"> Indore </option>
              <option value="Jabalpur"> Jabalpur </option>
              <option value="Jagatsinghpur"> Jagatsinghpur </option>
              <option value="Jaintia Hills"> Jaintia Hills </option>
              <option value="Jaipur"> Jaipur </option>
              <option value="Jaisalmer"> Jaisalmer </option>
              <option value="Jajapur"> Jajapur </option>
              <option value="Jalandhar"> Jalandhar </option>
              <option value="Jalaun"> Jalaun </option>
              <option value="Jalgaon"> Jalgaon </option>
              <option value="Jalna"> Jalna </option>
              <option value="Jalore"> Jalore </option>
              <option value="Jalpaiguri"> Jalpaiguri </option>
              <option value="Jammu"> Jammu </option>
              <option value="Jamnagar"> Jamnagar </option>
              <option value="Jamshedpur"> Jamshedpur </option>
              <option value="Jamui"> Jamui </option>
              <option value="Janjgir-Champa"> Janjgir-Champa </option>
              <option value="Jashpur"> Jashpur </option>
              <option value="Jaunpur District"> Jaunpur District </option>
              <option value="Jehanabad"> Jehanabad </option>
              <option value="Jhabua"> Jhabua </option>
              <option value="Jhajjar"> Jhajjar </option>
              <option value="Jhalawar"> Jhalawar </option>
              <option value="Jhansi"> Jhansi </option>
              <option value="Jharsuguda"> Jharsuguda </option>
              <option value="Jind"> Jind </option>
              <option value="Jodhpur"> Jodhpur </option>
              <option value="Jorhat"> Jorhat </option>
              <option value="Juhnjhunun"> Juhnjhunun </option>
              <option value="Junagadh"> Junagadh </option>
              <option value="Jyotiba Phule Nagar"> Jyotiba Phule Nagar </option>
              <option value="Kadapa"> Kadapa </option>
              <option value="Kaimur"> Kaimur </option>
              <option value="Kaithal"> Kaithal </option>
              <option value="Kalahandi"> Kalahandi </option>
              <option value="Kanchipuram"> Kanchipuram </option>
              <option value="Kandhamal"> Kandhamal </option>
              <option value="Kangra"> Kangra </option>
              <option value="Kanker"> Kanker </option>
              <option value="Kannauj"> Kannauj </option>
              <option value="Kannur"> Kannur </option>
              <option value="Kanpur Dehat"> Kanpur Dehat </option>
              <option value="Kanpur Nagar"> Kanpur Nagar </option>
              <option value="Kanshiram Nagar"> Kanshiram Nagar </option>
              <option value="Kanyakumari"> Kanyakumari </option>
              <option value="Kapurthala"> Kapurthala </option>
              <option value="Karaikal"> Karaikal </option>
              <option value="Karauli"> Karauli </option>
              <option value="Karbi Anglong"> Karbi Anglong </option>
              <option value="Kargil"> Kargil </option>
              <option value="Karimganj"> Karimganj </option>
              <option value="Karimnagar"> Karimnagar </option>
              <option value="Karnal"> Karnal </option>
              <option value="Karur"> Karur </option>
              <option value="Kasaragod"> Kasaragod </option>
              <option value="Kathua"> Kathua </option>
              <option value="Katihar"> Katihar </option>
              <option value="Katni"> Katni </option>
              <option value="Kaushambi"> Kaushambi </option>
              <option value="Kawardha"> Kawardha </option>
              <option value="Kendrapara"> Kendrapara </option>
              <option value="Kendujhar"> Kendujhar </option>
              <option value="Khagaria"> Khagaria </option>
              <option value="Khammam"> Khammam </option>
              <option value="Khandwa"> Khandwa </option>
              <option value="Khargone"> Khargone </option>
              <option value="Kheda"> Kheda </option>
              <option value="Khordha"> Khordha </option>
              <option value="Kinnaur"> Kinnaur </option>
              <option value="Kishanganj"> Kishanganj </option>
              <option value="Kodagu"> Kodagu </option>
              <option value="Koderma"> Koderma </option>
              <option value="Kohima"> Kohima </option>
              <option value="Kokrajhar"> Kokrajhar </option>
              <option value="Kolar"> Kolar </option>
              <option value="Kolasib"> Kolasib </option>
              <option value="Kolhapur"> Kolhapur </option>
              <option value="Kolkata"> Kolkata </option>
              <option value="Kollam"> Kollam </option>
              <option value="Koppal"> Koppal </option>
              <option value="Koraput"> Koraput </option>
              <option value="Korba"> Korba </option>
              <option value="Koriya"> Koriya </option>
              <option value="Kota"> Kota </option>
              <option value="Kottayam"> Kottayam </option>
              <option value="Kozhikode"> Kozhikode </option>
              <option value="Krishna"> Krishna </option>
              <option value="Kulu"> Kulu </option>
              <option value="Kupwara"> Kupwara </option>
              <option value="Kurnool"> Kurnool </option>
              <option value="Kurukshetra"> Kurukshetra </option>
              <option value="Kushinagar"> Kushinagar </option>
              <option value="Kutch"> Kutch </option>
              <option value="Lahaul and Spiti"> Lahaul and Spiti </option>
              <option value="Lakhimpur"> Lakhimpur </option>
              <option value="Lakhimpur Kheri"> Lakhimpur Kheri </option>
              <option value="Lakhisarai"> Lakhisarai </option>
              <option value="Lalitpur"> Lalitpur </option>
              <option value="Latur"> Latur </option>
              <option value="Lawngtlai"> Lawngtlai </option>
              <option value="Leh"> Leh </option>
              <option value="Lohardaga"> Lohardaga </option>
              <option value="Lohit"> Lohit </option>
              <option value="Lower Subansiri"> Lower Subansiri </option>
              <option value="Lucknow"> Lucknow </option>
              <option value="Ludhiana"> Ludhiana </option>
              <option value="Lunglei"> Lunglei </option>
              <option value="Madhepura"> Madhepura </option>
              <option value="Madhubani"> Madhubani </option>
              <option value="Madurai"> Madurai </option>
              <option value="Mahamaya Nagar"> Mahamaya Nagar </option>
              <option value="Maharajganj"> Maharajganj </option>
              <option value="Mahasamund"> Mahasamund </option>
              <option value="Mahbubnagar"> Mahbubnagar </option>
              <option value="Mahe"> Mahe </option>
              <option value="Mahendragarh"> Mahendragarh </option>
              <option value="Mahoba"> Mahoba </option>
              <option value="Mainpuri"> Mainpuri </option>
              <option value="Malappuram"> Malappuram </option>
              <option value="Malda"> Malda </option>
              <option value="Malkangiri"> Malkangiri </option>
              <option value="Mamit"> Mamit </option>
              <option value="Mandi"> Mandi </option>
              <option value="Mandla"> Mandla </option>
              <option value="Mandsaur"> Mandsaur </option>
              <option value="Mandya"> Mandya </option>
              <option value="Mansa"> Mansa </option>
              <option value="Marigaon"> Marigaon </option>
              <option value="Mathura"> Mathura </option>
              <option value="Mau"> Mau </option>
              <option value="Mayurbhanj"> Mayurbhanj </option>
              <option value="Medak"> Medak </option>
              <option value="Meerut"> Meerut </option>
              <option value="Mehsana"> Mehsana </option>
              <option value="Mewat"> Mewat </option>
              <option value="Midnapore"> Midnapore </option>
              <option value="Mirzapur"> Mirzapur </option>
              <option value="Moga"> Moga </option>
              <option value="Mokokchung"> Mokokchung </option>
              <option value="Mon"> Mon </option>
              <option value="Moradabad"> Moradabad </option>
              <option value="Morena"> Morena </option>
              <option value="Mukatsar"> Mukatsar </option>
              <option value="Mumbai City"> Mumbai City </option>
              <option value="Mumbai suburban"> Mumbai suburban </option>
              <option value="Munger"> Munger </option>
              <option value="Murshidabad"> Murshidabad </option>
              <option value="Muzaffarnagar"> Muzaffarnagar </option>
              <option value="Muzaffarpur"> Muzaffarpur </option>
              <option value="Mysore"> Mysore </option>
              <option value="Nabarangpur"> Nabarangpur </option>
              <option value="Nadia"> Nadia </option>
              <option value="Nagaon"> Nagaon </option>
              <option value="Nagapattinam"> Nagapattinam </option>
              <option value="Nagaur"> Nagaur </option>
              <option value="Nagpur"> Nagpur </option>
              <option value="Nainital"> Nainital </option>
              <option value="Nalanda"> Nalanda </option>
              <option value="Nalbari"> Nalbari </option>
              <option value="Nalgonda"> Nalgonda </option>
              <option value="Namakkal"> Namakkal </option>
              <option value="Nanded"> Nanded </option>
              <option value="Nandurbar"> Nandurbar </option>
              <option value="Narmada"> Narmada </option>
              <option value="Narsinghpur"> Narsinghpur </option>
              <option value="Nashik"> Nashik </option>
              <option value="Navsari"> Navsari </option>
              <option value="Nawada"> Nawada </option>
              <option value="Nawan Shehar"> Nawan Shehar </option>
              <option value="Nayagarh"> Nayagarh </option>
              <option value="Neemuch"> Neemuch </option>
              <option value="Nellore"> Nellore </option>
              <option value="New Delhi"> New Delhi </option>
              <option value="Nicobar"> Nicobar </option>
              <option value="Nizamabad"> Nizamabad </option>
              <option value="North 24 Parganas"> North 24 Parganas </option>
              <option value="North and Middle Andaman">
                {" "}
                North and Middle Andaman{" "}
              </option>
              <option value="North Cachar Hills"> North Cachar Hills </option>
              <option value="North Delhi"> North Delhi </option>
              <option value="North East Delhi"> North East Delhi </option>
              <option value="North Goa"> North Goa </option>
              <option value="North Sikkim"> North Sikkim </option>
              <option value="North Tripura"> North Tripura </option>
              <option value="North West Delhi"> North West Delhi </option>
              <option value="Nuapada"> Nuapada </option>
              <option value="Osmanabad"> Osmanabad </option>
              <option value="Pakur"> Pakur </option>
              <option value="Palakkad"> Palakkad </option>
              <option value="Palamu"> Palamu </option>
              <option value="Pali"> Pali </option>
              <option value="Palwal"> Palwal </option>
              <option value="Panchkula"> Panchkula </option>
              <option value="Panchmahal"> Panchmahal </option>
              <option value="Panipat"> Panipat </option>
              <option value="Panna"> Panna </option>
              <option value="Papum Pare"> Papum Pare </option>
              <option value="Parbhani"> Parbhani </option>
              <option value="Pashchim Champaran"> Pashchim Champaran </option>
              <option value="Pashchim Singhbhum"> Pashchim Singhbhum </option>
              <option value="Patan"> Patan </option>
              <option value="Pathanamthitta"> Pathanamthitta </option>
              <option value="Patiala"> Patiala </option>
              <option value="Patna"> Patna </option>
              <option value="Pauri Garhwal"> Pauri Garhwal </option>
              <option value="Perambalur"> Perambalur </option>
              <option value="Phek"> Phek </option>
              <option value="Pilibhit"> Pilibhit </option>
              <option value="Pithoragharh"> Pithoragharh </option>
              <option value="Poonch"> Poonch </option>
              <option value="Porbandar"> Porbandar </option>
              <option value="Prakasam"> Prakasam </option>
              <option value="Pratapgarh"> Pratapgarh </option>
              <option value="Pratapgarh"> Pratapgarh </option>
              <option value="Puducherry"> Puducherry </option>
              <option value="Pudukkottai"> Pudukkottai </option>
              <option value="Pulwama"> Pulwama </option>
              <option value="Pune"> Pune </option>
              <option value="Purba Champaran"> Purba Champaran </option>
              <option value="Purba Singhbhum"> Purba Singhbhum </option>
              <option value="Puri"> Puri </option>
              <option value="Purnia"> Purnia </option>
              <option value="Purulia"> Purulia </option>
              <option value="Rae Bareli"> Rae Bareli </option>
              <option value="Raichur"> Raichur </option>
              <option value="Raigad"> Raigad </option>
              <option value="Raigarh"> Raigarh </option>
              <option value="Raipur"> Raipur </option>
              <option value="Raisen"> Raisen </option>
              <option value="Rajauri"> Rajauri </option>
              <option value="Rajgarh"> Rajgarh </option>
              <option value="Rajkot"> Rajkot </option>
              <option value="Rajnandgaon"> Rajnandgaon </option>
              <option value="Rajsamand"> Rajsamand </option>
              <option value="Ramanagara"> Ramanagara </option>
              <option value="Ramanathapuram"> Ramanathapuram </option>
              <option value="Ramgarh"> Ramgarh </option>
              <option value="Rampur"> Rampur </option>
              <option value="Ranchi"> Ranchi </option>
              <option value="Rangareddi"> Rangareddi </option>
              <option value="Ratlam"> Ratlam </option>
              <option value="Ratnagiri"> Ratnagiri </option>
              <option value="Rayagada"> Rayagada </option>
              <option value="Rewa"> Rewa </option>
              <option value="Rewari"> Rewari </option>
              <option value="Ri-Bhoi"> Ri-Bhoi </option>
              <option value="Rohtak"> Rohtak </option>
              <option value="Rohtas"> Rohtas </option>
              <option value="Rudraprayag"> Rudraprayag </option>
              <option value="Rupnagar"> Rupnagar </option>
              <option value="Sabarkantha"> Sabarkantha </option>
              <option value="Sagar"> Sagar </option>
              <option value="Saharanpur"> Saharanpur </option>
              <option value="Saharsa"> Saharsa </option>
              <option value="Sahibganj"> Sahibganj </option>
              <option value="Saiha"> Saiha </option>
              <option value="Salem"> Salem </option>
              <option value="Samastipur"> Samastipur </option>
              <option value="Samba"> Samba </option>
              <option value="Sambalpur"> Sambalpur </option>
              <option value="Sangli"> Sangli </option>
              <option value="Sangrur"> Sangrur </option>
              <option value="Sant Kabir Nagar"> Sant Kabir Nagar </option>
              <option value="Sant Ravidas Nagar"> Sant Ravidas Nagar </option>
              <option value="Saran"> Saran </option>
              <option value="Satara"> Satara </option>
              <option value="Satna"> Satna </option>
              <option value="Sawai Madhopur"> Sawai Madhopur </option>
              <option value="Sehore"> Sehore </option>
              <option value="Senapati"> Senapati </option>
              <option value="Seoni"> Seoni </option>
              <option value="Seraikela and Kharsawan">
                {" "}
                Seraikela and Kharsawan{" "}
              </option>
              <option value="Serchhip"> Serchhip </option>
              <option value="Shahdol"> Shahdol </option>
              <option value="Shahjahanpur"> Shahjahanpur </option>
              <option value="Shajapur"> Shajapur </option>
              <option value="Sheikhpura"> Sheikhpura </option>
              <option value="Sheohar"> Sheohar </option>
              <option value="Sheopur"> Sheopur </option>
              <option value="Shimla"> Shimla </option>
              <option value="Shimoga"> Shimoga </option>
              <option value="Shivpuri"> Shivpuri </option>
              <option value="Shravasti"> Shravasti </option>
              <option value="Sibsagar"> Sibsagar </option>
              <option value="Siddharthnagar"> Siddharthnagar </option>
              <option value="Sidhi"> Sidhi </option>
              <option value="Sikar"> Sikar </option>
              <option value="Sindhudurg"> Sindhudurg </option>
              <option value="Singrauli"> Singrauli </option>
              <option value="Sirmaur"> Sirmaur </option>
              <option value="Sirohi"> Sirohi </option>
              <option value="Sirsa"> Sirsa </option>
              <option value="Sitamarhi"> Sitamarhi </option>
              <option value="Sitapur"> Sitapur </option>
              <option value="Sivagangai"> Sivagangai </option>
              <option value="Siwan"> Siwan </option>
              <option value="Solan"> Solan </option>
              <option value="Solapur"> Solapur </option>
              <option value="Sonbhadra"> Sonbhadra </option>
              <option value="Sonepat"> Sonepat </option>
              <option value="Sonitpur"> Sonitpur </option>
              <option value="South 24 Parganas"> South 24 Parganas </option>
              <option value="South Andaman"> South Andaman </option>
              <option value="South Delhi"> South Delhi </option>
              <option value="South Garo Hills"> South Garo Hills </option>
              <option value="South Goa"> South Goa </option>
              <option value="South Sikkim"> South Sikkim </option>
              <option value="South Tripura"> South Tripura </option>
              <option value="South West Delhi"> South West Delhi </option>
              <option value="Srikakulam"> Srikakulam </option>
              <option value="Srinagar"> Srinagar </option>
              <option value="Subarnapur"> Subarnapur </option>
              <option value="Sultanpur"> Sultanpur </option>
              <option value="Sundargarh"> Sundargarh </option>
              <option value="Supaul"> Supaul </option>
              <option value="Surat"> Surat </option>
              <option value="Surendranagar"> Surendranagar </option>
              <option value="Surguja"> Surguja </option>
              <option value="Tamenglong"> Tamenglong </option>
              <option value="Tehri Garhwal"> Tehri Garhwal </option>
              <option value="Thane"> Thane </option>
              <option value="Thanjavur"> Thanjavur </option>
              <option value="The Dangs"> The Dangs </option>
              <option value="The Nilgiris"> The Nilgiris </option>
              <option value="Theni"> Theni </option>
              <option value="Thiruvallur"> Thiruvallur </option>
              <option value="Thiruvananthapuram"> Thiruvananthapuram </option>
              <option value="Thiruvarur"> Thiruvarur </option>
              <option value="Thoothukudi"> Thoothukudi </option>
              <option value="Thoubal"> Thoubal </option>
              <option value="Thrissur"> Thrissur </option>
              <option value="Tikamgarh"> Tikamgarh </option>
              <option value="Tinsukia"> Tinsukia </option>
              <option value="Tirap"> Tirap </option>
              <option value="Tiruchirappalli"> Tiruchirappalli </option>
              <option value="Tirunelveli"> Tirunelveli </option>
              <option value="Tiruppur"> Tiruppur </option>
              <option value="Tiruvannamalai"> Tiruvannamalai </option>
              <option value="Tonk"> Tonk </option>
              <option value="Tuensang"> Tuensang </option>
              <option value="Tumkur"> Tumkur </option>
              <option value="Udaipur"> Udaipur </option>
              <option value="Udham Singh Nagar"> Udham Singh Nagar </option>
              <option value="Udhampur"> Udhampur </option>
              <option value="Udupi"> Udupi </option>
              <option value="Ujjain"> Ujjain </option>
              <option value="Ukhrul"> Ukhrul </option>
              <option value="Umaria"> Umaria </option>
              <option value="Una"> Una </option>
              <option value="Unnao"> Unnao </option>
              <option value="Upper Subansiri"> Upper Subansiri </option>
              <option value="Uttar Dinajpur"> Uttar Dinajpur </option>
              <option value="Uttara Kannada"> Uttara Kannada </option>
              <option value="Uttarkashi"> Uttarkashi </option>
              <option value="Vadodara"> Vadodara </option>
              <option value="Vaishali"> Vaishali </option>
              <option value="Valsad"> Valsad </option>
              <option value="Varanasi"> Varanasi </option>
              <option value="Vellore"> Vellore </option>
              <option value="Vidisha"> Vidisha </option>
              <option value="Villupuram"> Villupuram </option>
              <option value="Vishakhapatnam"> Vishakhapatnam </option>
              <option value="Vizianagaram"> Vizianagaram </option>
              <option value="Warangal"> Warangal </option>
              <option value="Wardha"> Wardha </option>
              <option value="Washim"> Washim </option>
              <option value="Wayanad"> Wayanad </option>
              <option value="West Delhi"> West Delhi </option>
              <option value="West Garo Hills"> West Garo Hills </option>
              <option value="West Godavari"> West Godavari </option>
              <option value="West Kameng"> West Kameng </option>
              <option value="West Khasi Hills"> West Khasi Hills </option>
              <option value="West Sikkim"> West Sikkim </option>
              <option value="West Tripura"> West Tripura </option>
              <option value="Wokha"> Wokha </option>
              <option value="Yadagiri"> Yadagiri </option>
              <option value="Yamuna Nagar"> Yamuna Nagar </option>
              <option value="Yanam"> Yanam </option>
              <option value="Yavatmal"> Yavatmal </option>
              <option value="Zunheboto"> Zunheboto</option>
            </select>
          </div>
          <div className="f4 red">{`${permCityErr}`}</div>
        </div>
        <div className="margin">
          <div className="left1">State</div>
          <div className="center1">:</div>
          <div className="right1">
            <select 
            id="state" 
            name="per_state"
            autoComplete="blej"
            onChange = {(event) => setPermStateField(event)}
            onBlur = {() => permStateValidate()}>
              <option value="none">-- Select State --</option>
              <option value="Andaman and Nicobar">Andaman and Nicobar</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadra and Nagar Haveli">
                Dadra and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Orissa">Orissa</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div className="f4 red">{`${permStateErr}`}</div>
        </div>
        <div className="margin">
          <div className="checkboxWrapper">
            {" "}
            <div className="but">
              <input
                className="checkbox"
                type="checkbox"
                autoComplete="blej"
                onClick = {(event) => sameAddHandler(event)}
                onBlur = {() => display()}
              />
            </div>
            <div className="para">
              <p> Same as Permanent Address</p>
            </div>
          </div>
        </div>
        <div className="margin">
          <div className="text-box">
            <div className="left1">Current Address</div>
            <div className="center1">:</div>
            <div className="right1">
              <textarea
                className="input"
                id="currentAddress"
                name="cur_address"
                autoComplete="blej"
                onChange = {(event) => setCurrAddField(event)}
                onBlur = {() => currAddValidate()}>
              </textarea>
            </div>
          </div>
          <div className="f4 red">{`${currAddErr}`}</div>
        </div>
        <div className="margin">
          <div className="left1">City</div>
          <div className="center1">:</div>
          <div className="right1">
            <select 
            className="citySelect" 
            id="cur_city" 
            name="cur_city"
            autoComplete="blej"
            onChange = {(event) => setCurrCityField(event)}
            onBlur = {() => currCityValidate()}>
              <option value="none">-- Select City --</option>
              <option value="Adilabad"> Adilabad </option>
              <option value="Agra"> Agra </option>
              <option value="Agartala"> Agartala </option>
              <option value="Ahmedabad"> Ahmedabad </option>
              <option value="Ahmednagar"> Ahmednagar </option>
              <option value="Aizawl"> Aizawl </option>
              <option value="Ajmer"> Ajmer </option>
              <option value="Akola"> Akola </option>
              <option value="Alappuzha"> Alappuzha </option>
              <option value="Aligarh"> Aligarh </option>
              <option value="Alirajpur"> Alirajpur </option>
              <option value="Allahabad"> Allahabad </option>
              <option value="Almora"> Almora </option>
              <option value="Alwar"> Alwar </option>
              <option value="Ambala"> Ambala </option>
              <option value="Ambedkar Nagar"> Ambedkar Nagar </option>
              <option value="Amrawati"> Amrawati </option>
              <option value="Amreli District"> Amreli District </option>
              <option value="Amritsar"> Amritsar </option>
              <option value="Anand"> Anand </option>
              <option value="Anantapur"> Anantapur </option>
              <option value="Anantnag"> Anantnag </option>
              <option value="Angul"> Angul </option>
              <option value="Anjaw"> Anjaw </option>
              <option value="Anuppur"> Anuppur </option>
              <option value="Araria"> Araria </option>
              <option value="Ariyalur"> Ariyalur </option>
              <option value="Ashok Nagar"> Ashok Nagar </option>
              <option value="Auraiya"> Auraiya </option>
              <option value="Aurangabad"> Aurangabad </option>
              <option value="Aurangabad"> Aurangabad </option>
              <option value="Azamgarh"> Azamgarh </option>
              <option value="Badaun"> Badaun </option>
              <option value="Badgam"> Badgam </option>
              <option value="Bagalkot"> Bagalkot </option>
              <option value="Bageshwar"> Bageshwar </option>
              <option value="Bagpat"> Bagpat </option>
              <option value="Bahraich"> Bahraich </option>
              <option value="Balaghat"> Balaghat </option>
              <option value="Baleswar"> Baleswar </option>
              <option value="Ballia"> Ballia </option>
              <option value="Balrampur"> Balrampur </option>
              <option value="Banaskantha"> Banaskantha </option>
              <option value="Banda"> Banda </option>
              <option value="Bandipore"> Bandipore </option>
              <option value="Bangalore Rural District">
                {" "}
                Bangalore Rural District{" "}
              </option>
              <option value="Bangalore Urban District">
                {" "}
                Bangalore Urban District{" "}
              </option>
              <option value="Banka"> Banka </option>
              <option value="Bankura"> Bankura </option>
              <option value="Banswara"> Banswara </option>
              <option value="Barabanki"> Barabanki </option>
              <option value="Baramula"> Baramula </option>
              <option value="Baran"> Baran </option>
              <option value="Bardhaman"> Bardhaman </option>
              <option value="Bareilly"> Bareilly </option>
              <option value="Bargarh"> Bargarh </option>
              <option value="Barmer"> Barmer </option>
              <option value="Barpeta"> Barpeta </option>
              <option value="Barwani"> Barwani </option>
              <option value="Bastar"> Bastar </option>
              <option value="Basti"> Basti </option>
              <option value="Bathinda"> Bathinda </option>
              <option value="Beed"> Beed </option>
              <option value="Begusarai"> Begusarai </option>
              <option value="Belgaum"> Belgaum </option>
              <option value="Bellary"> Bellary </option>
              <option value="Betul"> Betul </option>
              <option value="Bhadrak"> Bhadrak </option>
              <option value="Bhagalpur"> Bhagalpur </option>
              <option value="Bhandara"> Bhandara </option>
              <option value="Bharatpur"> Bharatpur </option>
              <option value="Bharuch"> Bharuch </option>
              <option value="Bhavnagar"> Bhavnagar </option>
              <option value="Bhilwara"> Bhilwara </option>
              <option value="Bhind"> Bhind </option>
              <option value="Bhiwani"> Bhiwani </option>
              <option value="Bhojpur"> Bhojpur </option>
              <option value="Bhopal"> Bhopal </option>
              <option value="Bidar"> Bidar </option>
              <option value="Bijapur"> Bijapur </option>
              <option value="Bijnor"> Bijnor </option>
              <option value="Bikaner"> Bikaner </option>
              <option value="Bilaspur"> Bilaspur </option>
              <option value="Bilaspur"> Bilaspur </option>
              <option value="Birbhum"> Birbhum </option>
              <option value="Bishnupur"> Bishnupur </option>
              <option value="Bokaro"> Bokaro </option>
              <option value="Bolangir"> Bolangir </option>
              <option value="Bongaigaon"> Bongaigaon </option>
              <option value="Boudh"> Boudh </option>
              <option value="Bulandshahr"> Bulandshahr </option>
              <option value="Buldhana"> Buldhana </option>
              <option value="Bundi"> Bundi </option>
              <option value="Burhanpur"> Burhanpur </option>
              <option value="Buxar"> Buxar </option>
              <option value="Cachar"> Cachar </option>
              <option value="Central Delhi"> Central Delhi </option>
              <option value="Chamarajnagar"> Chamarajnagar </option>
              <option value="Chamba"> Chamba </option>
              <option value="Chamoli"> Chamoli</option>
              <option value="Chandigarh"> Chandigarh</option>
              <option value="Champawat"> Champawat </option>
              <option value="Champhai"> Champhai </option>
              <option value="Chandauli"> Chandauli </option>
              <option value="Chandel"> Chandel </option>
              <option value="Chandrapur"> Chandrapur </option>
              <option value="Changlang"> Changlang </option>
              <option value="Chatra"> Chatra </option>
              <option value="Chennai"> Chennai </option>
              <option value="Chhatarpur"> Chhatarpur </option>
              <option value="Chhindwara"> Chhindwara </option>
              <option value="Chikballapur"> Chikballapur </option>
              <option value="Chikmagalur"> Chikmagalur </option>
              <option value="Chitradurga"> Chitradurga </option>
              <option value="Chitrakoot"> Chitrakoot </option>
              <option value="Chittoor"> Chittoor </option>
              <option value="Chittorgarh"> Chittorgarh </option>
              <option value="Churachandpur"> Churachandpur </option>
              <option value="Churu"> Churu </option>
              <option value="Coimbatore"> Coimbatore </option>
              <option value="Cooch Behar"> Cooch Behar </option>
              <option value="Cuddalore"> Cuddalore </option>
              <option value="Cuttack"> Cuttack </option>
              <option value="Dahod"> Dahod </option>
              <option value="Dakshin Dinajpur"> Dakshin Dinajpur </option>
              <option value="Dakshina Kannada"> Dakshina Kannada </option>
              <option value="Daman"> Daman </option>
              <option value="Damoh"> Damoh </option>
              <option value="Dantewada"> Dantewada </option>
              <option value="Darbhanga"> Darbhanga </option>
              <option value="Darjeeling"> Darjeeling </option>
              <option value="Darrang"> Darrang </option>
              <option value="Datia"> Datia </option>
              <option value="Dausa"> Dausa </option>
              <option value="Davanagere"> Davanagere </option>
              <option value="Debagarh"> Debagarh </option>
              <option value="Dehradun"> Dehradun </option>
              <option value="Deoghar"> Deoghar </option>
              <option value="Deoria"> Deoria </option>
              <option value="Dewas"> Dewas </option>
              <option value="Dhalai"> Dhalai </option>
              <option value="Dhamtari"> Dhamtari </option>
              <option value="Dhanbad"> Dhanbad </option>
              <option value="Dhar"> Dhar </option>
              <option value="Dharmapuri"> Dharmapuri </option>
              <option value="Dharwad"> Dharwad </option>
              <option value="Dhemaji"> Dhemaji </option>
              <option value="Dhenkanal"> Dhenkanal </option>
              <option value="Dholpur"> Dholpur </option>
              <option value="Dhubri"> Dhubri </option>
              <option value="Dhule"> Dhule </option>
              <option value="Dibang Valley"> Dibang Valley </option>
              <option value="Dibrugarh"> Dibrugarh </option>
              <option value="Dimapur"> Dimapur </option>
              <option value="Dindigul"> Dindigul </option>
              <option value="Dindori"> Dindori </option>
              <option value="Diu"> Diu </option>
              <option value="Doda"> Doda </option>
              <option value="Dumka"> Dumka </option>
              <option value="Dungapur"> Dungapur </option>
              <option value="Durg"> Durg </option>
              <option value="East Delhi"> East Delhi </option>
              <option value="East Garo Hills"> East Garo Hills </option>
              <option value="East Godavari"> East Godavari </option>
              <option value="East Kameng"> East Kameng </option>
              <option value="East Khasi Hills"> East Khasi Hills </option>
              <option value="East Sikkim"> East Sikkim </option>
              <option value="Ernakulam"> Ernakulam </option>
              <option value="Erode"> Erode </option>
              <option value="Etah"> Etah </option>
              <option value="Etawah"> Etawah </option>
              <option value="Faizabad"> Faizabad </option>
              <option value="Faridabad"> Faridabad </option>
              <option value="Faridkot"> Faridkot </option>
              <option value="Farrukhabad"> Farrukhabad </option>
              <option value="Fatehabad"> Fatehabad </option>
              <option value="Fatehgarh Sahib"> Fatehgarh Sahib </option>
              <option value="Fatehpur"> Fatehpur </option>
              <option value="Firozabad"> Firozabad </option>
              <option value="Firozpur"> Firozpur </option>
              <option value="Gadag"> Gadag </option>
              <option value="Gadchiroli"> Gadchiroli </option>
              <option value="Gajapati"> Gajapati </option>
              <option value="Gandhinagar"> Gandhinagar </option>
              <option value="Ganganagar"> Ganganagar </option>
              <option value="Ganjam"> Ganjam </option>
              <option value="Garhwa"> Garhwa </option>
              <option value="Gautam Buddha Nagar"> Gautam Buddha Nagar </option>
              <option value="Gaya"> Gaya </option>
              <option value="Ghaziabad"> Ghaziabad </option>
              <option value="Ghazipur"> Ghazipur </option>
              <option value="Giridih"> Giridih </option>
              <option value="Goalpara"> Goalpara </option>
              <option value="Godda"> Godda </option>
              <option value="Golaghat"> Golaghat </option>
              <option value="Gonda"> Gonda </option>
              <option value="Gondiya"> Gondiya </option>
              <option value="Gopalganj"> Gopalganj </option>
              <option value="Gorkakhpur"> Gorkakhpur </option>
              <option value="Gulbarga"> Gulbarga </option>
              <option value="Gumla"> Gumla </option>
              <option value="Guna"> Guna </option>
              <option value="Guntur"> Guntur </option>
              <option value="Gurdaspur"> Gurdaspur </option>
              <option value="Gurgaon"> Gurgaon </option>
              <option value="Gwalior"> Gwalior </option>
              <option value="Hailakandi"> Hailakandi </option>
              <option value="Hamirpur"> Hamirpur </option>
              <option value="Hamirpur"> Hamirpur </option>
              <option value="Hanumangarh"> Hanumangarh </option>
              <option value="Harda"> Harda </option>
              <option value="Hardoi"> Hardoi </option>
              <option value="Haridwar"> Haridwar </option>
              <option value="Hassan"> Hassan </option>
              <option value="Haveri District"> Haveri District </option>
              <option value="Hazaribagh"> Hazaribagh </option>
              <option value="Hingoli"> Hingoli </option>
              <option value="Hissar"> Hissar </option>
              <option value="Hooghly"> Hooghly </option>
              <option value="Hoshangabad"> Hoshangabad </option>
              <option value="Hoshiarpur"> Hoshiarpur </option>
              <option value="Howrah"> Howrah </option>
              <option value="Hyderabad"> Hyderabad </option>
              <option value="Idukki"> Idukki </option>
              <option value="Imphal East"> Imphal East </option>
              <option value="Imphal West"> Imphal West </option>
              <option value="Indore"> Indore </option>
              <option value="Jabalpur"> Jabalpur </option>
              <option value="Jagatsinghpur"> Jagatsinghpur </option>
              <option value="Jaintia Hills"> Jaintia Hills </option>
              <option value="Jaipur"> Jaipur </option>
              <option value="Jaisalmer"> Jaisalmer </option>
              <option value="Jajapur"> Jajapur </option>
              <option value="Jalandhar"> Jalandhar </option>
              <option value="Jalaun"> Jalaun </option>
              <option value="Jalgaon"> Jalgaon </option>
              <option value="Jalna"> Jalna </option>
              <option value="Jalore"> Jalore </option>
              <option value="Jalpaiguri"> Jalpaiguri </option>
              <option value="Jammu"> Jammu </option>
              <option value="Jamnagar"> Jamnagar </option>
              <option value="Jamui"> Jamui </option>
              <option value="Janjgir-Champa"> Janjgir-Champa </option>
              <option value="Jashpur"> Jashpur </option>
              <option value="Jaunpur District"> Jaunpur District </option>
              <option value="Jehanabad"> Jehanabad </option>
              <option value="Jhabua"> Jhabua </option>
              <option value="Jhajjar"> Jhajjar </option>
              <option value="Jhalawar"> Jhalawar </option>
              <option value="Jhansi"> Jhansi </option>
              <option value="Jharsuguda"> Jharsuguda </option>
              <option value="Jind"> Jind </option>
              <option value="Jodhpur"> Jodhpur </option>
              <option value="Jorhat"> Jorhat </option>
              <option value="Juhnjhunun"> Juhnjhunun </option>
              <option value="Junagadh"> Junagadh </option>
              <option value="Jyotiba Phule Nagar"> Jyotiba Phule Nagar </option>
              <option value="Kadapa"> Kadapa </option>
              <option value="Kaimur"> Kaimur </option>
              <option value="Kaithal"> Kaithal </option>
              <option value="Kalahandi"> Kalahandi </option>
              <option value="Kanchipuram"> Kanchipuram </option>
              <option value="Kandhamal"> Kandhamal </option>
              <option value="Kangra"> Kangra </option>
              <option value="Kanker"> Kanker </option>
              <option value="Kannauj"> Kannauj </option>
              <option value="Kannur"> Kannur </option>
              <option value="Kanpur Dehat"> Kanpur Dehat </option>
              <option value="Kanpur Nagar"> Kanpur Nagar </option>
              <option value="Kanshiram Nagar"> Kanshiram Nagar </option>
              <option value="Kanyakumari"> Kanyakumari </option>
              <option value="Kapurthala"> Kapurthala </option>
              <option value="Karaikal"> Karaikal </option>
              <option value="Karauli"> Karauli </option>
              <option value="Karbi Anglong"> Karbi Anglong </option>
              <option value="Kargil"> Kargil </option>
              <option value="Karimganj"> Karimganj </option>
              <option value="Karimnagar"> Karimnagar </option>
              <option value="Karnal"> Karnal </option>
              <option value="Karur"> Karur </option>
              <option value="Kasaragod"> Kasaragod </option>
              <option value="Kathua"> Kathua </option>
              <option value="Katihar"> Katihar </option>
              <option value="Katni"> Katni </option>
              <option value="Kaushambi"> Kaushambi </option>
              <option value="Kawardha"> Kawardha </option>
              <option value="Kendrapara"> Kendrapara </option>
              <option value="Kendujhar"> Kendujhar </option>
              <option value="Khagaria"> Khagaria </option>
              <option value="Khammam"> Khammam </option>
              <option value="Khandwa"> Khandwa </option>
              <option value="Khargone"> Khargone </option>
              <option value="Kheda"> Kheda </option>
              <option value="Khordha"> Khordha </option>
              <option value="Kinnaur"> Kinnaur </option>
              <option value="Kishanganj"> Kishanganj </option>
              <option value="Kodagu"> Kodagu </option>
              <option value="Koderma"> Koderma </option>
              <option value="Kohima"> Kohima </option>
              <option value="Kokrajhar"> Kokrajhar </option>
              <option value="Kolar"> Kolar </option>
              <option value="Kolasib"> Kolasib </option>
              <option value="Kolhapur"> Kolhapur </option>
              <option value="Kolkata"> Kolkata </option>
              <option value="Kollam"> Kollam </option>
              <option value="Koppal"> Koppal </option>
              <option value="Koraput"> Koraput </option>
              <option value="Korba"> Korba </option>
              <option value="Koriya"> Koriya </option>
              <option value="Kota"> Kota </option>
              <option value="Kottayam"> Kottayam </option>
              <option value="Kozhikode"> Kozhikode </option>
              <option value="Krishna"> Krishna </option>
              <option value="Kulu"> Kulu </option>
              <option value="Kupwara"> Kupwara </option>
              <option value="Kurnool"> Kurnool </option>
              <option value="Kurukshetra"> Kurukshetra </option>
              <option value="Kushinagar"> Kushinagar </option>
              <option value="Kutch"> Kutch </option>
              <option value="Lahaul and Spiti"> Lahaul and Spiti </option>
              <option value="Lakhimpur"> Lakhimpur </option>
              <option value="Lakhimpur Kheri"> Lakhimpur Kheri </option>
              <option value="Lakhisarai"> Lakhisarai </option>
              <option value="Lalitpur"> Lalitpur </option>
              <option value="Latur"> Latur </option>
              <option value="Lawngtlai"> Lawngtlai </option>
              <option value="Leh"> Leh </option>
              <option value="Lohardaga"> Lohardaga </option>
              <option value="Lohit"> Lohit </option>
              <option value="Lower Subansiri"> Lower Subansiri </option>
              <option value="Lucknow"> Lucknow </option>
              <option value="Ludhiana"> Ludhiana </option>
              <option value="Lunglei"> Lunglei </option>
              <option value="Madhepura"> Madhepura </option>
              <option value="Madhubani"> Madhubani </option>
              <option value="Madurai"> Madurai </option>
              <option value="Mahamaya Nagar"> Mahamaya Nagar </option>
              <option value="Maharajganj"> Maharajganj </option>
              <option value="Mahasamund"> Mahasamund </option>
              <option value="Mahbubnagar"> Mahbubnagar </option>
              <option value="Mahe"> Mahe </option>
              <option value="Mahendragarh"> Mahendragarh </option>
              <option value="Mahoba"> Mahoba </option>
              <option value="Mainpuri"> Mainpuri </option>
              <option value="Malappuram"> Malappuram </option>
              <option value="Malda"> Malda </option>
              <option value="Malkangiri"> Malkangiri </option>
              <option value="Mamit"> Mamit </option>
              <option value="Mandi"> Mandi </option>
              <option value="Mandla"> Mandla </option>
              <option value="Mandsaur"> Mandsaur </option>
              <option value="Mandya"> Mandya </option>
              <option value="Mansa"> Mansa </option>
              <option value="Marigaon"> Marigaon </option>
              <option value="Mathura"> Mathura </option>
              <option value="Mau"> Mau </option>
              <option value="Mayurbhanj"> Mayurbhanj </option>
              <option value="Medak"> Medak </option>
              <option value="Meerut"> Meerut </option>
              <option value="Mehsana"> Mehsana </option>
              <option value="Mewat"> Mewat </option>
              <option value="Midnapore"> Midnapore </option>
              <option value="Mirzapur"> Mirzapur </option>
              <option value="Moga"> Moga </option>
              <option value="Mokokchung"> Mokokchung </option>
              <option value="Mon"> Mon </option>
              <option value="Moradabad"> Moradabad </option>
              <option value="Morena"> Morena </option>
              <option value="Mukatsar"> Mukatsar </option>
              <option value="Mumbai City"> Mumbai City </option>
              <option value="Mumbai suburban"> Mumbai suburban </option>
              <option value="Munger"> Munger </option>
              <option value="Murshidabad"> Murshidabad </option>
              <option value="Muzaffarnagar"> Muzaffarnagar </option>
              <option value="Muzaffarpur"> Muzaffarpur </option>
              <option value="Mysore"> Mysore </option>
              <option value="Nabarangpur"> Nabarangpur </option>
              <option value="Nadia"> Nadia </option>
              <option value="Nagaon"> Nagaon </option>
              <option value="Nagapattinam"> Nagapattinam </option>
              <option value="Nagaur"> Nagaur </option>
              <option value="Nagpur"> Nagpur </option>
              <option value="Nainital"> Nainital </option>
              <option value="Nalanda"> Nalanda </option>
              <option value="Nalbari"> Nalbari </option>
              <option value="Nalgonda"> Nalgonda </option>
              <option value="Namakkal"> Namakkal </option>
              <option value="Nanded"> Nanded </option>
              <option value="Nandurbar"> Nandurbar </option>
              <option value="Narmada"> Narmada </option>
              <option value="Narsinghpur"> Narsinghpur </option>
              <option value="Nashik"> Nashik </option>
              <option value="Navsari"> Navsari </option>
              <option value="Nawada"> Nawada </option>
              <option value="Nawan Shehar"> Nawan Shehar </option>
              <option value="Nayagarh"> Nayagarh </option>
              <option value="Neemuch"> Neemuch </option>
              <option value="Nellore"> Nellore </option>
              <option value="New Delhi"> New Delhi </option>
              <option value="Nicobar"> Nicobar </option>
              <option value="Nizamabad"> Nizamabad </option>
              <option value="North 24 Parganas"> North 24 Parganas </option>
              <option value="North and Middle Andaman">
                {" "}
                North and Middle Andaman{" "}
              </option>
              <option value="North Cachar Hills"> North Cachar Hills </option>
              <option value="North Delhi"> North Delhi </option>
              <option value="North East Delhi"> North East Delhi </option>
              <option value="North Goa"> North Goa </option>
              <option value="North Sikkim"> North Sikkim </option>
              <option value="North Tripura"> North Tripura </option>
              <option value="North West Delhi"> North West Delhi </option>
              <option value="Nuapada"> Nuapada </option>
              <option value="Osmanabad"> Osmanabad </option>
              <option value="Pakur"> Pakur </option>
              <option value="Palakkad"> Palakkad </option>
              <option value="Palamu"> Palamu </option>
              <option value="Pali"> Pali </option>
              <option value="Palwal"> Palwal </option>
              <option value="Panchkula"> Panchkula </option>
              <option value="Panchmahal"> Panchmahal </option>
              <option value="Panipat"> Panipat </option>
              <option value="Panna"> Panna </option>
              <option value="Papum Pare"> Papum Pare </option>
              <option value="Parbhani"> Parbhani </option>
              <option value="Pashchim Champaran"> Pashchim Champaran </option>
              <option value="Pashchim Singhbhum"> Pashchim Singhbhum </option>
              <option value="Patan"> Patan </option>
              <option value="Pathanamthitta"> Pathanamthitta </option>
              <option value="Patiala"> Patiala </option>
              <option value="Patna"> Patna </option>
              <option value="Pauri Garhwal"> Pauri Garhwal </option>
              <option value="Perambalur"> Perambalur </option>
              <option value="Phek"> Phek </option>
              <option value="Pilibhit"> Pilibhit </option>
              <option value="Pithoragharh"> Pithoragharh </option>
              <option value="Poonch"> Poonch </option>
              <option value="Porbandar"> Porbandar </option>
              <option value="Prakasam"> Prakasam </option>
              <option value="Pratapgarh"> Pratapgarh </option>
              <option value="Pratapgarh"> Pratapgarh </option>
              <option value="Puducherry"> Puducherry </option>
              <option value="Pudukkottai"> Pudukkottai </option>
              <option value="Pulwama"> Pulwama </option>
              <option value="Pune"> Pune </option>
              <option value="Purba Champaran"> Purba Champaran </option>
              <option value="Purba Singhbhum"> Purba Singhbhum </option>
              <option value="Puri"> Puri </option>
              <option value="Purnia"> Purnia </option>
              <option value="Purulia"> Purulia </option>
              <option value="Rae Bareli"> Rae Bareli </option>
              <option value="Raichur"> Raichur </option>
              <option value="Raigad"> Raigad </option>
              <option value="Raigarh"> Raigarh </option>
              <option value="Raipur"> Raipur </option>
              <option value="Raisen"> Raisen </option>
              <option value="Rajauri"> Rajauri </option>
              <option value="Rajgarh"> Rajgarh </option>
              <option value="Rajkot"> Rajkot </option>
              <option value="Rajnandgaon"> Rajnandgaon </option>
              <option value="Rajsamand"> Rajsamand </option>
              <option value="Ramanagara"> Ramanagara </option>
              <option value="Ramanathapuram"> Ramanathapuram </option>
              <option value="Ramgarh"> Ramgarh </option>
              <option value="Rampur"> Rampur </option>
              <option value="Ranchi"> Ranchi </option>
              <option value="Rangareddi"> Rangareddi </option>
              <option value="Ratlam"> Ratlam </option>
              <option value="Ratnagiri"> Ratnagiri </option>
              <option value="Rayagada"> Rayagada </option>
              <option value="Rewa"> Rewa </option>
              <option value="Rewari"> Rewari </option>
              <option value="Ri-Bhoi"> Ri-Bhoi </option>
              <option value="Rohtak"> Rohtak </option>
              <option value="Rohtas"> Rohtas </option>
              <option value="Rudraprayag"> Rudraprayag </option>
              <option value="Rupnagar"> Rupnagar </option>
              <option value="Sabarkantha"> Sabarkantha </option>
              <option value="Sagar"> Sagar </option>
              <option value="Saharanpur"> Saharanpur </option>
              <option value="Saharsa"> Saharsa </option>
              <option value="Sahibganj"> Sahibganj </option>
              <option value="Saiha"> Saiha </option>
              <option value="Salem"> Salem </option>
              <option value="Samastipur"> Samastipur </option>
              <option value="Samba"> Samba </option>
              <option value="Sambalpur"> Sambalpur </option>
              <option value="Sangli"> Sangli </option>
              <option value="Sangrur"> Sangrur </option>
              <option value="Sant Kabir Nagar"> Sant Kabir Nagar </option>
              <option value="Sant Ravidas Nagar"> Sant Ravidas Nagar </option>
              <option value="Saran"> Saran </option>
              <option value="Satara"> Satara </option>
              <option value="Satna"> Satna </option>
              <option value="Sawai Madhopur"> Sawai Madhopur </option>
              <option value="Sehore"> Sehore </option>
              <option value="Senapati"> Senapati </option>
              <option value="Seoni"> Seoni </option>
              <option value="Seraikela and Kharsawan">
                {" "}
                Seraikela and Kharsawan{" "}
              </option>
              <option value="Serchhip"> Serchhip </option>
              <option value="Shahdol"> Shahdol </option>
              <option value="Shahjahanpur"> Shahjahanpur </option>
              <option value="Shajapur"> Shajapur </option>
              <option value="Sheikhpura"> Sheikhpura </option>
              <option value="Sheohar"> Sheohar </option>
              <option value="Sheopur"> Sheopur </option>
              <option value="Shimla"> Shimla </option>
              <option value="Shimoga"> Shimoga </option>
              <option value="Shivpuri"> Shivpuri </option>
              <option value="Shravasti"> Shravasti </option>
              <option value="Sibsagar"> Sibsagar </option>
              <option value="Siddharthnagar"> Siddharthnagar </option>
              <option value="Sidhi"> Sidhi </option>
              <option value="Sikar"> Sikar </option>
              <option value="Sindhudurg"> Sindhudurg </option>
              <option value="Singrauli"> Singrauli </option>
              <option value="Sirmaur"> Sirmaur </option>
              <option value="Sirohi"> Sirohi </option>
              <option value="Sirsa"> Sirsa </option>
              <option value="Sitamarhi"> Sitamarhi </option>
              <option value="Sitapur"> Sitapur </option>
              <option value="Sivagangai"> Sivagangai </option>
              <option value="Siwan"> Siwan </option>
              <option value="Solan"> Solan </option>
              <option value="Solapur"> Solapur </option>
              <option value="Sonbhadra"> Sonbhadra </option>
              <option value="Sonepat"> Sonepat </option>
              <option value="Sonitpur"> Sonitpur </option>
              <option value="South 24 Parganas"> South 24 Parganas </option>
              <option value="South Andaman"> South Andaman </option>
              <option value="South Delhi"> South Delhi </option>
              <option value="South Garo Hills"> South Garo Hills </option>
              <option value="South Goa"> South Goa </option>
              <option value="South Sikkim"> South Sikkim </option>
              <option value="South Tripura"> South Tripura </option>
              <option value="South West Delhi"> South West Delhi </option>
              <option value="Srikakulam"> Srikakulam </option>
              <option value="Srinagar"> Srinagar </option>
              <option value="Subarnapur"> Subarnapur </option>
              <option value="Sultanpur"> Sultanpur </option>
              <option value="Sundargarh"> Sundargarh </option>
              <option value="Supaul"> Supaul </option>
              <option value="Surat"> Surat </option>
              <option value="Surendranagar"> Surendranagar </option>
              <option value="Surguja"> Surguja </option>
              <option value="Tamenglong"> Tamenglong </option>
              <option value="Tehri Garhwal"> Tehri Garhwal </option>
              <option value="Thane"> Thane </option>
              <option value="Thanjavur"> Thanjavur </option>
              <option value="The Dangs"> The Dangs </option>
              <option value="The Nilgiris"> The Nilgiris </option>
              <option value="Theni"> Theni </option>
              <option value="Thiruvallur"> Thiruvallur </option>
              <option value="Thiruvananthapuram"> Thiruvananthapuram </option>
              <option value="Thiruvarur"> Thiruvarur </option>
              <option value="Thoothukudi"> Thoothukudi </option>
              <option value="Thoubal"> Thoubal </option>
              <option value="Thrissur"> Thrissur </option>
              <option value="Tikamgarh"> Tikamgarh </option>
              <option value="Tinsukia"> Tinsukia </option>
              <option value="Tirap"> Tirap </option>
              <option value="Tiruchirappalli"> Tiruchirappalli </option>
              <option value="Tirunelveli"> Tirunelveli </option>
              <option value="Tiruppur"> Tiruppur </option>
              <option value="Tiruvannamalai"> Tiruvannamalai </option>
              <option value="Tonk"> Tonk </option>
              <option value="Tuensang"> Tuensang </option>
              <option value="Tumkur"> Tumkur </option>
              <option value="Udaipur"> Udaipur </option>
              <option value="Udham Singh Nagar"> Udham Singh Nagar </option>
              <option value="Udhampur"> Udhampur </option>
              <option value="Udupi"> Udupi </option>
              <option value="Ujjain"> Ujjain </option>
              <option value="Ukhrul"> Ukhrul </option>
              <option value="Umaria"> Umaria </option>
              <option value="Una"> Una </option>
              <option value="Unnao"> Unnao </option>
              <option value="Upper Subansiri"> Upper Subansiri </option>
              <option value="Uttar Dinajpur"> Uttar Dinajpur </option>
              <option value="Uttara Kannada"> Uttara Kannada </option>
              <option value="Uttarkashi"> Uttarkashi </option>
              <option value="Vadodara"> Vadodara </option>
              <option value="Vaishali"> Vaishali </option>
              <option value="Valsad"> Valsad </option>
              <option value="Varanasi"> Varanasi </option>
              <option value="Vellore"> Vellore </option>
              <option value="Vidisha"> Vidisha </option>
              <option value="Villupuram"> Villupuram </option>
              <option value="Vishakhapatnam"> Vishakhapatnam </option>
              <option value="Vizianagaram"> Vizianagaram </option>
              <option value="Warangal"> Warangal </option>
              <option value="Wardha"> Wardha </option>
              <option value="Washim"> Washim </option>
              <option value="Wayanad"> Wayanad </option>
              <option value="West Delhi"> West Delhi </option>
              <option value="West Garo Hills"> West Garo Hills </option>
              <option value="West Godavari"> West Godavari </option>
              <option value="West Kameng"> West Kameng </option>
              <option value="West Khasi Hills"> West Khasi Hills </option>
              <option value="West Sikkim"> West Sikkim </option>
              <option value="West Tripura"> West Tripura </option>
              <option value="Wokha"> Wokha </option>
              <option value="Yadagiri"> Yadagiri </option>
              <option value="Yamuna Nagar"> Yamuna Nagar </option>
              <option value="Yanam"> Yanam </option>
              <option value="Yavatmal"> Yavatmal </option>
              <option value="Zunheboto"> Zunheboto</option>
            </select>
          </div>
          <div className="f4 red">{`${currCityErr}`}</div>
        </div>
        <div className="margin">
          <div className="left1">State</div>
          <div className="center1">:</div>
          <div className="right1">
            <select 
            id="cur_state" 
            name="cur_state"
            autoComplete="blej"
            onChange = {(event) => setCurrStateField(event)}
            onBlur = {() => currStateValidate()}>
              <option value="none">-- Select State --</option>
              <option value="Andaman and Nicobar">Andaman and Nicobar</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadra and Nagar Haveli">
                Dadra and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Orissa">Orissa</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div className="f4 red">{`${currStateErr}`}</div>
        </div>
        <div className="margin">
          <div className="left1">Blood Group</div>
          <div className="center1">:</div>
          <div className="right1">
            <select 
            id="bloodgroup" 
            name="blood_group"
            autoComplete="blej"
            onChange = {(event) => setBloodField(event)}
            onBlur = {() => bloodValidate()}>
              <option value="none">--Select BloodGroup--</option>
              <option value="A Positive">A +ve</option>
              <option value="A Negative">A -ve</option>
              <option value="B Positive">B +ve</option>
              <option value="B Negative">B -ve</option>
              <option value="AB Positive">AB +ve</option>
              <option value="AB Negative">AB -ve</option>
              <option value="O Positive">O +ve</option>
              <option value="O Negative">O -ve</option>
            </select>
          </div>
          <div className="f4 red">{`${bloodErr}`}</div>
        </div>
        <h2>Individual's Category</h2>
        <div className="margin">
          <div className="left1">Category</div>
          <div className="center1">:</div>
          <div className="right1">
            <select 
            id="category" 
            name="category"
            autoComplete="blej"
            onChange = {(event) => setCategoryField(event)}
            onBlur = {() => categoryValidate()}>
              <option value="none">--Select Category--</option>
              <option value="working">Working</option>
              <option value="student">Student</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="f4 red">{`${categoryErr}`}</div>
        </div>
        <div className="margin">
          <div className="text-box">
            <div className="left1">Why do you want to join us?</div>
            <div className="center1">:</div>
            <div className="right1">
              <textarea
                className="input"
                name="cause"
                id=""
                autoComplete="blej"
                onChange = {(event) => setReasonField(event)}
                onBlur = {() => reasonValidate()}
              ></textarea>
            </div>
          </div>
          <div className="f4 red">{`${reasonErr}`}</div>
        </div>
        <div className="margin btns">
          <input
            className="submit-btn"
            type="button"
            onClick={() => submit()}
            value="Confirm Details"
            id="confirm"
          />
          <button
            className="submit-btn submit"
            type="submit"
            id="submit"
          >
            Submit{" "}
          </button>
        </div>
        <div className="f4 red">{`${submitErr}`}</div>
      </div>
    </div>
  );
};

export default JoinUs;
