### Solutions for the Software Engineering Associate Task

Task
Implement a RESTful JSON HTTP API gateway that allows programmatic CRUD operations on user records.
All requests should be authenticated using HTTP Basic Authentication i.e. RFC2617
Host the API gateway on a publicly accessible server.
Note: If you need a server to host your application and would like us to provide one for you, kindly contact our R&D Team on rd@pmglobaltechnology.com

Specification
API Endpoint: “http://{HOSTNAME}:{PORT}/users” e.g. http://test.com/users

Authentication

Username: test
Password: pass1234
1. Create a User
Request

Endpoint : "/users" e.g. http://test.com/users

Method: POST

Data:

{
	"firstname": "chibunna",
	"lastname": "oduonye",
	"gender": "M",
	"date_of_birth": "2015-04-08"
}
Response

Code: 200

Data:

{
	"id": "1",
	"firstname": "chibunna",
	"lastname": "oduonye",
	"gender": "M",
	"date_of_birth": "2015-04-08",
	"date_created": "2014-07-17T03:03:34",
	"date_updated": "2014-07-17T03:03:34"
}
2. Select All Users
Request

Endpoint : "/users" e.g. http://test.com/users?filter_field=firstname&filter_value=chibunna

Method: GET

Parameters (Optional):

sort_field - this can be any field in the JSON e.g. "firstname",
sort_order_mode - this can be either "asc" or "desc"
filter_field - this can be any field in the JSON e.g. "firstname",
filter_value - the criteria upon which the response data will be filtered
page : The current page. Default is 1
page_size: The number of records per page. Default is 25
Response

Code: 200

Data:

[
		{
		"id": "1",
			"firstname": "chibunna",
			"lastname": "oduonye",
			"gender": "M",
			"date_of_birth": "1990-04-08",
			"date_created": "2014-07-17T03:03:34",
			"date_updated": "2014-07-17T03:03:34"
		},
		{
		"id": "2",
			"firstname": "Godwin",
			"lastname": "Orubebe",
			"gender": "M",
			"date_of_birth": "1965-04-08",
			"date_created": "2014-07-17T04:12:25",
			"date_updated": "2014-07-17T04:12:25"
		}
]

3. Select User By ID
Request

Endpoint : "/users/{id}" e.g. http://test.com/users/1

Method: GET

Response:

Code: 200

Data:

  {
	"id": "1",
       	"firstname": "chibunna",
	"lastname": "oduonye",
	"gender": "M",
	"date_of_birth": "2015-04-08",
	"date_created": "2014-07-17T03:03:34",
"date_updated": "2014-07-17T03:03:34"
}
4. Edit User
Request

Method: PUT

Endpoint: "users/{id}" e.g. http://test.com/users/1

Payload:

{
	"id": "2"
	"firstname": "Godwin",
	"lastname": "Jega",
	"gender": "M",
	"date_of_birth": "2015-04-08"
}
Response

Code: 200

Data:

{
	"id": "2"
	"firstname": "Godwin",
	"lastname": "Jega",
	"gender": "M",
	"date_of_birth": "2015-04-08",
	"date_created": "2014-07-17T04:12:25",
	"date_updated": "2014-07-17T18:44:19"
}
5. Delete User
Request

Method: DELETE

Endpoint: "users/{id}" e.g http://test.com/1

Response

Code: 200

Data: