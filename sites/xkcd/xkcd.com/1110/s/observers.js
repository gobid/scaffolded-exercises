function postLogInfo(name, data) {
    fetch("/1110/log", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, data: data })
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}
const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
        postLogInfo("FOUND MUTATION", mutation.type);
    }
};
const config = { attributes: true, childList: true, subtree: true };
