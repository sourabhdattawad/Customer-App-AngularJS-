
app.controller('customerController',function ($scope){
		
		$scope.customers = [

		{
			id:1,
			joined:'12-01-2014', 
			name:'python',
			city:'belgaum',
			orders:[
			{
				id:1,
				product:'shoes',
			}

			]
		},
		{
			id:2,
			joined:'13-01-2014',
			name:'java',
			city:'banglore',
			orders:[
			{
				id:2,
				product:'bag',
			}

			]
		},
		{
			id:3,
			joined:'14-01-2014', 
			name:'ruby',
			city:'pune',
			orders:[
			{
				id:3,
				product:'pen',
			}

			]
		}

		];
	

});
