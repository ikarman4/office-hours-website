
 //performs a request to the Google Analytics API to fetch the pageviews number in the last 30 days.
const { google } = require('googleapis')     
const scopes = 'https://www.googleapis.com/auth/analytics.readonly'
const jwt = new google.auth.JWT(process.env.CLIENT_EMAIL, null, process.env.PRIVATE_KEY, scopes)

const view_id = 'UA-156433148-1' //Id of the webpage through analytics

async function getData() {
  const response = await jwt.authorize()

          //NUMBER OF PAGEVIEWS IN LAST 30 DAYS
  const result = await google.analytics('v3').data.ga.get({
    'auth': jwt,
    'ids': 'ga:' + view_id,
    'start-date': '30daysAgo', //defines the starting date for the report
    'end-date': 'today',       //tells the API what we want to get
    'metrics': 'ga:pageviews'  //tells the API what we want to get
  })

          //NUMBER OF SESSIONS TODAY
//   const result = await google.analytics('v3').data.ga.get({
//     ...defaults,
//     'start-date': 'today',
//     'end-date': 'today',
//     'metrics': 'ga:sessions'
//   })
  
//   console.dir(result.data.rows[0][0])


          //NUMBER OF SESSIONS YESTERDAY
// const result = await google.analytics('v3').data.ga.get({
//     ...defaults,
//     'start-date': 'yesterday',
//     'end-date': 'yesterday',
//     'metrics': 'ga:sessions'
//   })
  
//   console.dir(result.data.rows[0][0])

          //BROWSERS USED IN THE LAST 30 DAYS
// const result = await google.analytics('v3').data.ga.get({
//     ...defaults,
//     'start-date': '30daysAgo',
//     'end-date': 'today',
//     'dimensions': 'ga:browser',
//     'metrics': 'ga:sessions'
//   })
  
//   console.dir(result.data.rows.sort((a, b) => b[1] - a[1]))

          //TRAFFIC SOURCE
// const result = await google.analytics('v3').data.ga.get({
//     ...defaults,
//     'start-date': '30daysAgo',
//     'end-date': 'today',
//     'dimensions': 'ga:source',
//     'metrics': 'ga:sessions'
//   })
  
//   console.dir(result.data.rows.sort((a, b) => b[1] - a[1]))


  console.dir(result)
}

getData()