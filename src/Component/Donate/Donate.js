import React,{useState} from "react";
import './Donate.css';
import 'tachyons';
import axios from "axios";

const Donate = () => {

  const [name, setName] = useState("");
  const [nameFlag, setNameFlag] = useState(false);
  const [nameErr, setNameErr] = useState("");

  const setNameField = (event) => {
    setName(event.target.value);
  }

  const nameValidate = (event) => {
    if(name!="")
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
    else if(mobile.length!=10)
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

  const [country, setCountry] = useState("none");
  const [countryFlag, setCountryFlag] = useState(false);
  const [countryErr, setCountryErr] = useState("");

  const setCountryField = (event) => {
    setCountry(event.target.value);
  }

  const countryValidate = () => {
    if(country==="none")
    {
      setCountryFlag(false);
      setCountryErr("*Country field is compulsary");
    }
    else
    {
      setCountryFlag(true);
      setCountryErr("");
    }
  }

  const [pincode, setPincode] = useState("");
  const [pincodeFlag, setPincodeFlag] = useState(false);
  const [pincodeErr, setPincodeErr] = useState("");

  const setPincodeField = (event) => {
    setPincode(event.target.value);
  }

  const pincodeValidate = () => {
    // String regex = "^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$";
    if(pincode==="")
    {
      setPincodeFlag(false);
      setPincodeErr("*Pincode field is compulsary");
    }
    else if(!pincode.match("^[1-9]{1}[0-9]{2}[0-9]{3}$"))
    {
      setPincodeFlag(false);
      setPincodeErr("*Enter valid pincode(eg: 411007)"); 
    }
    else
    {
      setPincodeFlag(true);
      setPincodeErr("");
    }
  }

  const [amount, setAmount] = useState(0);
  const [amountFlag, setAmountFlag] = useState(false);
  const [amountErr, setAmountErr] = useState("");

  const setDonateField = (event) => {
    setAmount(event.target.value);
  }

  const donateValidate = () => {
    if(amount===0 || amount===null || amount==="")
    {
      setAmountFlag(false);
      setAmountErr("*Donation amount empty.");
    }
    else
    {
      setAmountFlag(true);
      setAmountErr("");
    }
  }

  const [submitErr, setSubmitErr] = useState("");

    const submit = () => {
    if(
      nameFlag===true &&
      emailFlag===true &&
      mobileFlag===true &&
      permAddFlag===true &&
      permCityFlag===true &&
      permStateFlag===true &&
      countryFlag===true &&
      pincodeFlag===true &&
      amountFlag===true
      )
    {
      setSubmitErr("");
      displayRazorpay()
    }
    else
    {
      nameValidate();
      emailValidate();
      mobileValidate();
      permAddValidate();
      permCityValidate();
      permStateValidate();
      pincodeValidate();
      donateValidate();
      setSubmitErr("*Error.Check if all fields are filled completely.");
    }
  }

  ////////////////////////////////

  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

async function displayRazorpay() {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    const result = await axios.post("http://localhost:3000/payment/orders");

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
        key: "rzp_test_MneWOQBMV3h4lv", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(), //
        currency: currency,
        name: "Sharva Foundation",
        description: "Test Transaction",
        // image: { logo },
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post("http://localhost:3000/payment/success", data);

            alert(result.data.msg);
            console.log(result.data.msg);
        },
        prefill: {
            name: name,
            email: email,
            contact: mobile,
        },
        notes: {
            address: permAdd,
        },
        theme: {
            color: "#e88f0a",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}

////////////////////////////////////////////////////////////////

  return (
    <div className="backgrounddonateus msg">
      <h1>Donate</h1>
      <h2>।। हस्तस्य भूषणं दानम् ।।</h2>
      <div className="form-base" action="/donate" method="post" id="form">
        <div className="margin">
          <div className="left1"> Name</div>
          <div className="center1">:</div>
          <div className="right1">
            <input
              className="input"
              type="text"
              autoComplete="blej"
              onChange = {(event) => setNameField(event)}
              onBlur = {() => nameValidate()}
              name="name"
              placeholder="Enter your Name"
            />
          </div>
          <div className="f4 red">{`${nameErr}`}</div>
        </div>
        <div className="margin">
          <div className="left1"> Email Id</div>
          <div className="center1">:</div>
          <div className="right1">
            <input
              className="input"
              type="email"
              name="email"
              autoComplete="blej"
              onChange = {(event) => setEmailField(event)}
              onBlur = {() => emailValidate()}
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
              autoComplete = "blej"
              onInput = {(event) => numericFilter(event)}
              onChange = {(event) => setMobileField(event)}
              onBlur = {() => mobileValidate()}
              placeholder="Enter your Contact number"
              id="phone_no"
            />
          </div>
          <div className="f4 red">{`${mobileErr}`}</div>
        </div>
        <div className="margin">
          <div className="text-box">
            <div className="left1"> Address</div>
            <div className="center1">:</div>
            <div className="right1">
              <textarea
                className="input"
                name="address"
                autoComplete = "blej"
                onChange = {(event) => setPermAddField(event)}
                onBlur = {() => permAddValidate()}
                cols="30"
                rows="10"
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
            id="city" 
            name="city"
            autoComplete="blej"
            onChange = {(event) => setPermCityField(event)}
            onBlur = {() => permCityValidate()}>
              <option value="none">-- Select City --</option>
              <option value="Adilabad"> Adilabad </option>
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
              <option value="Chamoli"> Chamoli </option>
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
              <option value="Zunheboto"> Zunheboto </option>
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
            name="state"
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
              <option value="West Bengal">West Bengal </option>
            </select>
          </div>
          <div className="f4 red">{`${permStateErr}`}</div>
        </div>
        <div className="margin">
          <div className="left1">Country</div>
          <div className="center1">:</div>
          <div className="right1">
            <select 
            id="country" 
            name="country"
            autoComplete = "blej"
            onChange = {(event) => setCountryField(event)}
            onBlur = {() => countryValidate()}>
              <option value="none">-- Select Country --</option>
              <option value="India" title="India">
                India
              </option>
              <option value="Afghanistan" title="Afghanistan">
                Afghanistan
              </option>
              <option value="�land Islands" title="�land Islands">
                �land Islands
              </option>
              <option value="Albania" title="Albania">
                Albania
              </option>
              <option value="Algeria" title="Algeria">
                Algeria
              </option>
              <option value="American Samoa" title="American Samoa">
                American Samoa
              </option>
              <option value="Andorra" title="Andorra">
                Andorra
              </option>
              <option value="Angola" title="Angola">
                Angola
              </option>
              <option value="Anguilla" title="Anguilla">
                Anguilla
              </option>
              <option value="Antarctica" title="Antarctica">
                Antarctica
              </option>
              <option value="Argentina" title="Argentina">
                Argentina
              </option>
              <option value="Armenia" title="Armenia">
                Armenia
              </option>
              <option value="Aruba" title="Aruba">
                Aruba
              </option>
              <option value="Australia" title="Australia">
                Australia
              </option>
              <option value="Austria" title="Austria">
                Austria
              </option>
              <option value="Azerbaijan" title="Azerbaijan">
                Azerbaijan
              </option>
              <option value="Bahamas" title="Bahamas">
                Bahamas
              </option>
              <option value="Bahrain" title="Bahrain">
                Bahrain
              </option>
              <option value="Bangladesh" title="Bangladesh">
                Bangladesh
              </option>
              <option value="Barbados" title="Barbados">
                Barbados
              </option>
              <option value="Belarus" title="Belarus">
                Belarus
              </option>
              <option value="Belgium" title="Belgium">
                Belgium
              </option>
              <option value="Belize" title="Belize">
                Belize
              </option>
              <option value="Benin" title="Benin">
                Benin
              </option>
              <option value="Bermuda" title="Bermuda">
                Bermuda
              </option>
              <option value="Bhutan" title="Bhutan">
                Bhutan
              </option>
              <option value="Botswana" title="Botswana">
                Botswana
              </option>
              <option value="Bouvet Island" title="Bouvet Island">
                Bouvet Island
              </option>
              <option value="Brazil" title="Brazil">
                Brazil
              </option>
              <option value="Brunei" title="Brunei">
                Brunei
              </option>
              <option value="Bulgaria" title="Bulgaria">
                Bulgaria
              </option>
              <option value="Burundi" title="Burundi">
                Burundi
              </option>
              <option value="Cambodia" title="Cambodia">
                Cambodia
              </option>
              <option value="Cameroon" title="Cameroon">
                Cameroon
              </option>
              <option value="Canada" title="Canada">
                Canada
              </option>
              <option value="Cape Verde" title="Cape Verde">
                Cape Verde
              </option>
              <option value="Chad" title="Chad">
                Chad
              </option>
              <option value="Chile" title="Chile">
                Chile
              </option>
              <option value="China" title="China">
                China
              </option>
              <option value="Colombia" title="Colombia">
                Colombia
              </option>
              <option value="Comoros" title="Comoros">
                Comoros
              </option>
              <option value="Congo" title="Congo">
                Congo
              </option>
              <option value="Cook Islands" title="Cook Islands">
                Cook Islands
              </option>
              <option value="Costa Rica" title="Costa Rica">
                Costa Rica
              </option>
              <option value="C�te d'Ivoire" title="C�te d'Ivoire">
                C�te d'Ivoire
              </option>
              <option value="Croatia" title="Croatia">
                Croatia
              </option>
              <option value="Cuba" title="Cuba">
                Cuba
              </option>
              <option value="Cura�ao" title="Cura�ao">
                Cura�ao
              </option>
              <option value="Cyprus" title="Cyprus">
                Cyprus
              </option>
              <option value="Czech Republic" title="Czech Republic">
                Czech Republic
              </option>
              <option value="Denmark" title="Denmark">
                Denmark
              </option>
              <option value="Djibouti" title="Djibouti">
                Djibouti
              </option>
              <option value="Dominica" title="Dominica">
                Dominica
              </option>
              <option value="Ecuador" title="Ecuador">
                Ecuador
              </option>
              <option value="Egypt" title="Egypt">
                Egypt
              </option>
              <option value="Eritrea" title="Eritrea">
                Eritrea
              </option>
              <option value="Estonia" title="Estonia">
                Estonia
              </option>
              <option value="Ethiopia" title="Ethiopia">
                Ethiopia
              </option>
              <option value="Fiji" title="Fiji">
                Fiji
              </option>
              <option value="Finland" title="Finland">
                Finland
              </option>
              <option value="France" title="France">
                France
              </option>
              <option value="Gabon" title="Gabon">
                Gabon
              </option>
              <option value="Gambia" title="Gambia">
                Gambia
              </option>
              <option value="Georgia" title="Georgia">
                Georgia
              </option>
              <option value="Germany" title="Germany">
                Germany
              </option>
              <option value="Ghana" title="Ghana">
                Ghana
              </option>
              <option value="Gibraltar" title="Gibraltar">
                Gibraltar
              </option>
              <option value="Greece" title="Greece">
                Greece
              </option>
              <option value="Greenland" title="Greenland">
                Greenland
              </option>
              <option value="Grenada" title="Grenada">
                Grenada
              </option>
              <option value="Guadeloupe" title="Guadeloupe">
                Guadeloupe
              </option>
              <option value="Guam" title="Guam">
                Guam
              </option>
              <option value="Guatemala" title="Guatemala">
                Guatemala
              </option>
              <option value="Guernsey" title="Guernsey">
                Guernsey
              </option>
              <option value="Guinea" title="Guinea">
                Guinea
              </option>
              <option value="Guinea-Bissau" title="Guinea-Bissau">
                Guinea-Bissau
              </option>
              <option value="Guyana" title="Guyana">
                Guyana
              </option>
              <option value="Haiti" title="Haiti">
                Haiti
              </option>
              <option value="Honduras" title="Honduras">
                Honduras
              </option>
              <option value="Hong Kong" title="Hong Kong">
                Hong Kong
              </option>
              <option value="Hungary" title="Hungary">
                Hungary
              </option>
              <option value="Iceland" title="Iceland">
                Iceland
              </option>
              <option value="Indonesia" title="Indonesia">
                Indonesia
              </option>
              <option value="Iran" title="Iran">
                Iran
              </option>
              <option value="Iraq" title="Iraq">
                Iraq
              </option>
              <option value="Ireland" title="Ireland">
                Ireland
              </option>
              <option value="Isle of Man" title="Isle of Man">
                Isle of Man
              </option>
              <option value="Israel" title="Israel">
                Israel
              </option>
              <option value="Italy" title="Italy">
                Italy
              </option>
              <option value="Jamaica" title="Jamaica">
                Jamaica
              </option>
              <option value="Japan" title="Japan">
                Japan
              </option>
              <option value="Jersey" title="Jersey">
                Jersey
              </option>
              <option value="Jordan" title="Jordan">
                Jordan
              </option>
              <option value="Kazakhstan" title="Kazakhstan">
                Kazakhstan
              </option>
              <option value="Kenya" title="Kenya">
                Kenya
              </option>
              <option value="Kiribati" title="Kiribati">
                Kiribati
              </option>
              <option value="Korea" title="Korea">
                Korea
              </option>
              <option value="Kuwait" title="Kuwait">
                Kuwait
              </option>
              <option value="Kyrgyzstan" title="Kyrgyzstan">
                Kyrgyzstan
              </option>
              <option value="Latvia" title="Latvia">
                Latvia
              </option>
              <option value="Lebanon" title="Lebanon">
                Lebanon
              </option>
              <option value="Lesotho" title="Lesotho">
                Lesotho
              </option>
              <option value="Liberia" title="Liberia">
                Liberia
              </option>
              <option value="Libya" title="Libya">
                Libya
              </option>
              <option value="Liechtenstein" title="Liechtenstein">
                Liechtenstein
              </option>
              <option value="Lithuania" title="Lithuania">
                Lithuania
              </option>
              <option value="Luxembourg" title="Luxembourg">
                Luxembourg
              </option>
              <option value="Macao" title="Macao">
                Macao
              </option>
              <option value="Madagascar" title="Madagascar">
                Madagascar
              </option>
              <option value="Malawi" title="Malawi">
                Malawi
              </option>
              <option value="Malaysia" title="Malaysia">
                Malaysia
              </option>
              <option value="Maldives" title="Maldives">
                Maldives
              </option>
              <option value="Mali" title="Mali">
                Mali
              </option>
              <option value="Malta" title="Malta">
                Malta
              </option>
              <option value="Marshall Islands" title="Marshall Islands">
                Marshall Islands
              </option>
              <option value="Martinique" title="Martinique">
                Martinique
              </option>
              <option value="Mauritania" title="Mauritania">
                Mauritania
              </option>
              <option value="Mauritius" title="Mauritius">
                Mauritius
              </option>
              <option value="Mayotte" title="Mayotte">
                Mayotte
              </option>
              <option value="Mexico" title="Mexico">
                Mexico
              </option>
              <option value="Monaco" title="Monaco">
                Monaco
              </option>
              <option value="Mongolia" title="Mongolia">
                Mongolia
              </option>
              <option value="Montenegro" title="Montenegro">
                Montenegro
              </option>
              <option value="Montserrat" title="Montserrat">
                Montserrat
              </option>
              <option value="Morocco" title="Morocco">
                Morocco
              </option>
              <option value="Mozambique" title="Mozambique">
                Mozambique
              </option>
              <option value="Myanmar" title="Myanmar">
                Myanmar
              </option>
              <option value="Namibia" title="Namibia">
                Namibia
              </option>
              <option value="Nauru" title="Nauru">
                Nauru
              </option>
              <option value="Nepal" title="Nepal">
                Nepal
              </option>
              <option value="Netherlands" title="Netherlands">
                Netherlands
              </option>
              <option value="New Caledonia" title="New Caledonia">
                New Caledonia
              </option>
              <option value="New Zealand" title="New Zealand">
                New Zealand
              </option>
              <option value="Nicaragua" title="Nicaragua">
                Nicaragua
              </option>
              <option value="Niger" title="Niger">
                Niger
              </option>
              <option value="Nigeria" title="Nigeria">
                Nigeria
              </option>
              <option value="Niue" title="Niue">
                Niue
              </option>
              <option value="Norfolk Island" title="Norfolk Island">
                Norfolk Island
              </option>
              <option value="Norway" title="Norway">
                Norway
              </option>
              <option value="Oman" title="Oman">
                Oman
              </option>
              <option value="Pakistan" title="Pakistan">
                Pakistan
              </option>
              <option value="Palau" title="Palau">
                Palau
              </option>
              <option value="Panama" title="Panama">
                Panama
              </option>
              <option value="Papua New Guinea" title="Papua New Guinea">
                Papua New Guinea
              </option>
              <option value="Paraguay" title="Paraguay">
                Paraguay
              </option>
              <option value="Peru" title="Peru">
                Peru
              </option>
              <option value="Philippines" title="Philippines">
                Philippines
              </option>
              <option value="Pitcairn" title="Pitcairn">
                Pitcairn
              </option>
              <option value="Poland" title="Poland">
                Poland
              </option>
              <option value="Portugal" title="Portugal">
                Portugal
              </option>
              <option value="Puerto Rico" title="Puerto Rico">
                Puerto Rico
              </option>
              <option value="Qatar" title="Qatar">
                Qatar
              </option>
              <option value="R�union" title="R�union">
                R�union
              </option>
              <option value="Romania" title="Romania">
                Romania
              </option>
              <option value="Russian Federation" title="Russian Federation">
                Russian Federation
              </option>
              <option value="Rwanda" title="Rwanda">
                Rwanda
              </option>
              <option value="Saint Barth�lemy" title="Saint Barth�lemy">
                Saint Barth�lemy
              </option>
              <option value="Saint Lucia" title="Saint Lucia">
                Saint Lucia
              </option>
              <option value="Samoa" title="Samoa">
                Samoa
              </option>
              <option value="San Marino" title="San Marino">
                San Marino
              </option>
              <option value="Saudi Arabia" title="Saudi Arabia">
                Saudi Arabia
              </option>
              <option value="Senegal" title="Senegal">
                Senegal
              </option>
              <option value="Serbia" title="Serbia">
                Serbia
              </option>
              <option value="Seychelles" title="Seychelles">
                Seychelles
              </option>
              <option value="Sierra Leone" title="Sierra Leone">
                Sierra Leone
              </option>
              <option value="Singapore" title="Singapore">
                Singapore
              </option>
              <option value="Slovakia" title="Slovakia">
                Slovakia
              </option>
              <option value="Slovenia" title="Slovenia">
                Slovenia
              </option>
              <option value="Solomon Islands" title="Solomon Islands">
                Solomon Islands
              </option>
              <option value="Somalia" title="Somalia">
                Somalia
              </option>
              <option value="South Africa" title="South Africa">
                South Africa
              </option>
              <option value="South Georgia" title="South Georgia">
                South Georgia
              </option>
              <option value="South Sudan" title="South Sudan">
                South Sudan
              </option>
              <option value="Spain" title="Spain">
                Spain
              </option>
              <option value="Sri Lanka" title="Sri Lanka">
                Sri Lanka
              </option>
              <option value="Sudan" title="Sudan">
                Sudan
              </option>
              <option value="Suriname" title="Suriname">
                Suriname
              </option>
              <option value="Swaziland" title="Swaziland">
                Swaziland
              </option>
              <option value="Sweden" title="Sweden">
                Sweden
              </option>
              <option value="Switzerland" title="Switzerland">
                Switzerland
              </option>
              <option value="Syrian Arab Republic" title="Syrian Arab Republic">
                Syrian Arab Republic
              </option>
              <option value="Taiwan" title="Taiwan">
                Taiwan
              </option>
              <option value="Tajikistan" title="Tajikistan">
                Tajikistan
              </option>
              <option value="Tanzania" title="Tanzania">
                Tanzania
              </option>
              <option value="Thailand" title="Thailand">
                Thailand
              </option>
              <option value="Timor-Leste" title="Timor-Leste">
                Timor-Leste
              </option>
              <option value="Togo" title="Togo">
                Togo
              </option>
              <option value="Tokelau" title="Tokelau">
                Tokelau
              </option>
              <option value="Tonga" title="Tonga">
                Tonga
              </option>
              <option value="Trinidad and Tobago" title="Trinidad and Tobago">
                Trinidad and Tobago
              </option>
              <option value="Tunisia" title="Tunisia">
                Tunisia
              </option>
              <option value="Turkey" title="Turkey">
                Turkey
              </option>
              <option value="Turkmenistan" title="Turkmenistan">
                Turkmenistan
              </option>
              <option value="Tuvalu" title="Tuvalu">
                Tuvalu
              </option>
              <option value="Uganda" title="Uganda">
                Uganda
              </option>
              <option value="Ukraine" title="Ukraine">
                Ukraine
              </option>
              <option value="United Arab Emirates" title="United Arab Emirates">
                United Arab Emirates
              </option>
              <option value="United Kingdom" title="United Kingdom">
                United Kingdom
              </option>
              <option value="United States" title="United States">
                United States
              </option>
              <option value="Uruguay" title="Uruguay">
                Uruguay
              </option>
              <option value="Uzbekistan" title="Uzbekistan">
                Uzbekistan
              </option>
              <option value="Vanuatu" title="Vanuatu">
                Vanuatu
              </option>
              <option value="Venezuela" title="Venezuela">
                Venezuela
              </option>
              <option value="Viet Nam" title="Viet Nam">
                Viet Nam
              </option>
              <option value="Virgin Islands, U.S." title="Virgin Islands, U.S.">
                Virgin Islands, U.S.
              </option>
              <option value="Western Sahara" title="Western Sahara">
                Western Sahara
              </option>
              <option value="Yemen" title="Yemen">
                Yemen
              </option>
              <option value="Zambia" title="Zambia">
                Zambia
              </option>
              <option value="Zimbabwe" title="Zimbabwe">
                Zimbabwe{" "}
              </option>
            </select>
          </div>
          <div className="f4 red">{`${countryErr}`}</div>
        </div>
        <div className="margin">
          <div className="left1"> Pin Code</div>
          <div className="center1">:</div>
          <div className="right1">
            <input
              className="input"
              type="text"
              name="pincode"
              autoComplete="blej"
              onInput = {(event) => numericFilter(event)}
              onChange = {(event) => setPincodeField(event)}
              onBlur = {() => pincodeValidate()}
              placeholder="Enter your PIN Code"
            />
          </div>
          <div className="f4 red">{`${pincodeErr}`}</div>
        </div>
        <div className="margin">
          <div className="left1"> Donation Amount</div>
          <div className="center1">:</div>
          <div className="right1">
            <input
              className="input"
              type="number"
              name="donated"
              step="5"
              autoComplete="blej"
              onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57"
              onKeyDown={(event) => event.key==='.' && event.preventDefault()}
              onInput={(event) => numericFilter(event)}
              onChange={(event) => setDonateField(event)}
              onBlur = {() => donateValidate()}
              placeholder="00"
            />
          </div>
          <div className="f4 red">{`${amountErr}`}</div>
        </div>
        <div className="margin btns">
          <input
            className="submit-btn"
            type="button"
            id="confirm"
            onClick={() => submit()}
            value="Proceed to Pay"
          />
          <div className="f4 red">{`${submitErr}`}</div>
          <button 
          className="submit-btn submit" 
          type="submit" 
          id="submit"
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Donate;
