const request = require("request");

function simpleGet(callBack) {
  request(
    {
      url: "http://postman-echo.com/get",
      method: "GET"
    },
    function(error,response,result) {
      callBack(result);
    }
  );
}

function simpleGetWithParams(callBack) {
  request(
    {
      url: "http://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis",
      method: "GET"
    },
    function(error,response,result) {
      //console.log(JSON.parse(result).args);
      callBack(JSON.parse(result).args);
    }
  );
}

function validateTimestamp(callBack) {
  const today = new Date();
  const YYYY = today.getfullYear();
  const mm = today.getMonth();
  const dd =today.getdate();
  const currentTime = YYYY + "-" + mm + "-" + dd;

  request(
    {
      url: "http://postman-echo.com/get?timeStamp="+currentTime,
      method: "GET"
    },
    function(error,response,result) {
      callBack(result);
    }
  );
}

module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
};
