
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
        //hàm add() 
        function add() {
            //Phương getElementById()thức của Documentgiao diện trả về một Elementđối tượng đại diện cho phần tử có idthuộc tính khớp với chuỗi đã chỉ định.
            var item_id = document.getElementById("id").value;
            var item_name = document.getElementById("name").value;
            var item_age = document.getElementById("age").value;
    
            var item = {
                id: item_id,   // Đổi tên thuộc tính thành "id" để phù hợp với tên của trường nhập liệu
                name: item_name, // Đổi tên thuộc tính thành "name" để phù hợp với tên của trường nhập liệu
                age: item_age  // Đổi tên thuộc tính thành "age" để phù hợp với tên của trường nhập liệu
            };
            //Phương thức này findIndex()trả về chỉ mục của phần tử đầu tiên trong một mảng 
            //thỏa mãn chức năng kiểm tra được cung cấp. Nếu không có phần tử nào thỏa mãn chức năng kiểm tra, -1 được trả về.
            let index = data.findIndex((c)=>c.id==item.id);

            if(index>=0){
                data.splice(index,1,item)
            }else{
                data.push(item);
            }
            render();
            clead();
        }

        //hàm show ra màn hìnhhình
        function render() {
            table = `<tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                //nút sửa và xóa
                <th>Action</th>
            </tr>`;
    
            for (let i = 0; i < data.length; i++) {
                table += `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].age}</td>
                    // nút sửa và xóa
                    <td>
                        <button onclick="deleteItem(${data[i].id})" >Delete</button>
                        <button onclick="editItem(${data[i].id})" >Edit</button>
                        </td>
                </tr>`;
            }
            getElementById()thức của Documentgiao diện trả về một Elementđối tượng đại diện cho phần tử có idthuộc tính khớp với chuỗi đã chỉ định.
            //innerHTML : giúp thêm đc element,text và attribute note vào trong 1 element; 
            document.getElementById("render").innerHTML = table;
        }
        //cho các  phần tử rỗng
        function clear(){
            document.getElementById("id").value="";
            document.getElementById("name").value="";
            document.getElementById("age").value="";
        }
        // hàm xóa các phần tử 
        function deleteItem(x){
            for(let i=0;i< data.length;i++){
                if(data[i].id == x){
                    data.splice(i,1);
                }

                render();
            }
        }
        // hàm sửa các phần tử 
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
