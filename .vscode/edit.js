
edit and delete:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
</head>
<body>
    <div>
        <label for="">ID</label>
        <input type="number" id="id"/>
    </div>

    <div>
        <label for="">Name</label>
        <input type="text" id="name"/>
    </div>

    <div>
        <label for="">Age</label>
        <input type="number" id="age"/>
    </div>

    <div>
        <button onclick="add()">submit</button>
    </div>

    <table class="table" id="render">
        <thead>
            <tr>
                <th>ID</th>
                <th>name</th>
                <th>age</th>
                <th>Action</th>
            </tr>
        </thead>
    </table>

    <script>
        var data = [];
    
        function add() {
            var item_id = document.getElementById("id").value;
            var item_name = document.getElementById("name").value;
            var item_age = document.getElementById("age").value;
    
            var item = {
                id: item_id,   // Đổi tên thuộc tính thành "id" để phù hợp với tên của trường nhập liệu
                name: item_name, // Đổi tên thuộc tính thành "name" để phù hợp với tên của trường nhập liệu
                age: item_age  // Đổi tên thuộc tính thành "age" để phù hợp với tên của trường nhập liệu
            };

            let index = data.findIndex((c)=>c.id==item.id);

            if(index>=0){
                data.splice(index,1,item)
            }else{
                data.push(item);
            }
            render();
            clead();
        }
    
        function render() {
            table = `<tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>`;
    
            for (let i = 0; i < data.length; i++) {
                table += `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].age}</td>
                    <td>
                        <button onclick="deleteItem(${data[i].id})" >Delete</button>
                        <button onclick="editItem(${data[i].id})" >Edit</button>
                        </td>
                </tr>`;
            }
            document.getElementById("render").innerHTML = table;
        }

        function clead(){
            document.getElementById("id").value="";
            document.getElementById("name").value="";
            document.getElementById("age").value="";
        }

        function deleteItem(x){
            for(let i=0;i< data.length;i++){
                if(data[i].id == x){
                    data.splice(i,1);
                }

                render();
            }
        }

        function editItem(x){
            for(let i=0;i< data.length;i++){
                if(data[i].id == x){
                    document.getElementById("id").value= data[i].id;   
                    document.getElementById("name").value= data[i].name;   
                    document.getElementById("age").value= data[i].age;   
                }
            }
        }
    </script>
    
</body>
</html>
