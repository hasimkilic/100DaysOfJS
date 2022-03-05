// Course constructor
// ? Course büyük harfle olması önemli çünkü bu bizim için bir sınıfa karşılık geliyor.
function Course(title,instructor,image){
    this.title=title;
    this.instructor=instructor;
    this.image=image;
}

// IU constructor
function UI(){
}

UI.prototype.addCourseToList=function (course) { 
    const list = document.getElementById("course-list");

    var html = `
    <tr>
        <td><img src="image/${course.image}"/></td>
        <td>${course.title}</td>
        <td>${course.instructor}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete"> Kaldır </a> </td> 
    </tr>
    `; // son td içindeki a'nın classına delete verdik

    list.innerHTML +=html;
 }

UI.prototype.clearControls=function(){ 
    const title = document.getElementById("title").value="";
    const instructor=document.getElementById("instructor").value="";
    const image=document.getElementById("image").value="";
 }

 UI.prototype.deleteCourse = function(element){
     if(element.classList.contains("delete")) { // conatins: içermek
        element.parentElement.parentElement.remove();
     }
 }


document.getElementById("new-course").addEventListener("submit",function(e){

    const title=document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    const image = document.getElementById("image").value;

    // console.log(title,instructor,image);
    /*
    * Bilgilerimizin gelip gelmediğine bakcağız.
    * Bunu her aşamada yapmamız önemli çünkü ilerleyen aşamalarda hataların nereden geldiğini saptamak daha zor olacaktır. 
     */

    // create course object
    const course = new Course(title,instructor,image);

    // creat UI
    const ui = new UI();

    // add course the list
    ui.addCourseToList(course);

    // clear controls
    ui.clearControls(); 

    e.preventDefault(); // reminder: burada submit olayını kesiyoruz. Kesmezsek, sayfa submit olur sürekli. (resresh)
});

document.getElementById("course-list").addEventListener("click",function(e){
    const ui = new UI();
    ui.deleteCourse(e.target);
});