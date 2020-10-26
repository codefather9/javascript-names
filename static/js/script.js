const myName = async () => {
    const response = await fetch('http://javaproject1-293718.appspot.com/myname');
    const value = await response.json();
    document.querySelector('#my-name').textContent = value['name'];
};
myName();

/*async function getMyName() {
    const response = await fetch('http://localhost:8080/myname');
    const value = await response.json();
    document.querySelector('#my-name').textContent = value['name'];
}
getMyName();*/
