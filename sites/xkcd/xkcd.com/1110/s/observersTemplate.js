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
        if (mutation.type === "attributes") {
            postLogInfo(
                `FOUND MUTATION OF ${mutation.target.id}, classList: ${mutation.target.classList.value}`,
                `/* mutation type: ${mutation.type}, target: ${JSON.stringify(
                    mutation.target
                )}, attribute name: ${mutation.attributeName} prevVal: ${mutation.oldValue} */`
            );
        } else if (mutation.type === "childList") {
            postLogInfo(
                `FOUND MUTATION OF ${mutation.target.id}, classList: ${mutation.target.classList.value}`,
                `/* mutation type: ${mutation.type}, target: ${JSON.stringify(
                    mutation.target
                )}, added nodes: ${JSON.stringify(mutation.addedNodes)} removed nodes: ${JSON.stringify(
                    mutation.removedNodes
                )} */`
            );
        } else {
            /** mutation type is characterData. @TODO note limitations here with rich text editing (see https://www.smashingmagazine.com/2019/04/mutationobserver-api-guide/). Not currently a mutation found in XKCD */
            postLogInfo(
                `FOUND MUTATION OF ${mutation.target.id}, classList: ${mutation.target.classList.value}`,
                `/* mutation type: ${mutation.type}, target: ${JSON.stringify(mutation.target)} */`
            );
        }
    }
};
const config = {
    attributes: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterData: true
};
