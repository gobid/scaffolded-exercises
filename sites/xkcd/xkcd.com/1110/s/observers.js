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
const oxsKPTJ_targetNode = document.getElementById("oxsKPTJ");
const oxsKPTJ_observer = new MutationObserver(callback);
oxsKPTJ_observer.observe(oxsKPTJ_targetNode, config);

const eDpUHry_targetNode = document.getElementById("eDpUHry");
const eDpUHry_observer = new MutationObserver(callback);
eDpUHry_observer.observe(eDpUHry_targetNode, config);

const PhRMvsz_targetNode = document.getElementById("PhRMvsz");
const PhRMvsz_observer = new MutationObserver(callback);
PhRMvsz_observer.observe(PhRMvsz_targetNode, config);

const XqxlOpL_targetNode = document.getElementById("XqxlOpL");
const XqxlOpL_observer = new MutationObserver(callback);
XqxlOpL_observer.observe(XqxlOpL_targetNode, config);

const pdLofhg_targetNode = document.getElementById("pdLofhg");
const pdLofhg_observer = new MutationObserver(callback);
pdLofhg_observer.observe(pdLofhg_targetNode, config);

const aMjgwnK_targetNode = document.getElementById("aMjgwnK");
const aMjgwnK_observer = new MutationObserver(callback);
aMjgwnK_observer.observe(aMjgwnK_targetNode, config);

const EELjimR_targetNode = document.getElementById("EELjimR");
const EELjimR_observer = new MutationObserver(callback);
EELjimR_observer.observe(EELjimR_targetNode, config);

const OIWAmSn_targetNode = document.getElementById("OIWAmSn");
const OIWAmSn_observer = new MutationObserver(callback);
OIWAmSn_observer.observe(OIWAmSn_targetNode, config);

const sdEPEvO_targetNode = document.getElementById("sdEPEvO");
const sdEPEvO_observer = new MutationObserver(callback);
sdEPEvO_observer.observe(sdEPEvO_targetNode, config);

const fYPzrcK_targetNode = document.getElementById("fYPzrcK");
const fYPzrcK_observer = new MutationObserver(callback);
fYPzrcK_observer.observe(fYPzrcK_targetNode, config);

const ApQuumI_targetNode = document.getElementById("ApQuumI");
const ApQuumI_observer = new MutationObserver(callback);
ApQuumI_observer.observe(ApQuumI_targetNode, config);
