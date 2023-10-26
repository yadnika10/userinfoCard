function userInformation(){
    const firstName = prompt('Enter your First Name:');
    const lastName = prompt('Enter your Last Name:');
    const country = prompt('Enter your Country:');
    const PhoneNm = prompt('Enter your Phone Number:');
    const state = prompt('Eneter your State:');
    const city = prompt('Enter your City:');
    const village = prompt('Enter your Village:');

    const userData = {
        firstName,
        lastName,
        country,
        PhoneNm,
        state,
        city,
        village,
    }

    localStorage.setItem("UserInformation",JSON.stringify(userData))

    const fname = document.getElementById("firstnm")
    fname.textContent = `${userData.firstName}`;

    const lname = document.getElementById("lastnm")
    lname.textContent = `${userData.lastName}`;

    const country_ = document.getElementById("country")
    country_.textContent = `${userData.country}`;

    const phoneNm = document.getElementById("phonenm")
    phoneNm.textContent = `${userData.PhoneNm}`;

    const State = document.getElementById("state")
    State.textContent = `${userData.state}`;

    const City = document.getElementById("city")
    City.textContent = `${userData.city}`;

    const village_ = document.getElementById("village")
    village_.textContent = `${userData.village}`;

    //Download Data:
    const download_data = document.getElementById('download-data');

    download_data.addEventListener('click',function(){
        const dataFromLocalStorage = localStorage.getItem("UserInformation"); // Replace 'yourDataKey' with the key you used to store the data.

        if (dataFromLocalStorage) {
            const blob = new Blob([dataFromLocalStorage], { type: 'application/json' });

            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'user-data.txt';

            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } else {
            console.log('Data not found in local storage');
        }
    })
}
userInformation();


