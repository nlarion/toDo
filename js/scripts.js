function ToDo(task,note){
  this.task = task;
  this.note = note;
}
var list = 0;
$(function(){
  $("form#newToDo").submit(function(event){
    list++;
    event.preventDefault();
    var task = $("#task").val();
    var note = $("#note").val();
    var newToDo = new ToDo(task,note);
    $("#tasks").append("<li class='toDo' id='task"+list+"'>"+newToDo.task+"</li>");

    $("input#task").val("");
    $("input#note").val("");

    $('.toDo').last().click(function() {
      var someId = $(this).attr("id");
      $("#show-task").show();
      $("#show-task h2").text(newToDo.task);
      $(".note").text(newToDo.note);
      $(".buttonContainer").text("Remove").click(function(){
        $("#show-task").hide();
        $('#'+someId).hide();
      });
    });
  });
});
