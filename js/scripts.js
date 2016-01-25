function ToDo(task,note){
  this.task = task;
  this.note = note;
}

$(function(){
  $("form#newToDo").submit(function(event){
    event.preventDefault();
    var task = $("#task").val();
    var note = $("#note").val();
    var newToDo = new ToDo(task,note);
    $("#tasks").append("<li><span class='toDo'>"+newToDo.task+"</span></li>");

    $("input#task").val("");
    $("input#note").val("");

    $('.toDo').last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newToDo.task);
      $(".note").text(newToDo.note);
    });
  });

});
