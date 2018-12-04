function getAllRequest()
{
	axios.get('http://localhost:8080/items')
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function getFilteredRequest()
{
	axios.get('http://localhost:8080/items', {
		params: {
			filter : 'myFilter'
		}
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function getByIdRequest()
{
	id = 10;
	axios.get('http://localhost:8080/items/' + id)
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function postRequest()
{
	axios.post('http://localhost:8080/items', {
		data: 'NewItem'
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function putRequest()
{
	axios.put('http://localhost:8080/items', {
		id: '3',
		data: 'NewItem'
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function deleteRequest()
{
	id = 10;
	axios.delete('http://localhost:8080/items/' + id)
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

