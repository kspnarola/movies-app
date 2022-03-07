// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic a3NwQG5hcm9sYS5lbWFpbDpCNmo0THFGM21VRG1VOVF2VFh0aTg2QjI=");
  myHeaders.append("Cookie", "atlassian.xsrf.token=c107d769-5ae7-415b-9ffe-62657f26d5a4_f2715c16f3d17b389a6dd17a4933066d6454e12d_lin");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  await fetch("https://nextdecision.atlassian.net/rest/api/3/search?label in (prioritization)", requestOptions)
    .then(response => response.text())
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => console.log('error', error));
}
