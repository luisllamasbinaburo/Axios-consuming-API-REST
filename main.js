function getAllRequest()
{
	axios.get('http://localhost:8080/item')
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
	axios.get('http://localhost:8080/item', {
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
	axios.get('http://localhost:8080/item/' + id)
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
	axios.post('http://localhost:8080/item', {
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
	id = 10;
	axios.put('http://localhost:8080/item/' + id, {
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

function patchRequest()
{
	id = 10;
	axios.patch('http://localhost:8080/item/' + id, {
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
	axios.delete('http://localhost:8080/item/' + id)
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}
