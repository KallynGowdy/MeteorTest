// simple-todos.js
Tasks = new Mongo.Collection("tasks");

  // This code only runs on the client
if (Meteor.isClient) {

  // Helpers for the Template named 'body'
  Template.body.helpers({
    // define 'tasks' as a helper that returns the tasks from MongoDB.
    tasks: function() {
      return Tasks.find({}, {
        sort: {
          createdAt: -1
        }
      });
    }
  });

  // Events for the Template named 'body'
  Template.body.events({

    // When a '.new-task' form is submitted
    "submit .new-task": function(event) {
      var text = event.target.text.value;

      Tasks.insert({
        text: text,
        createdAt: new Date()
      });

      event.target.text.value = "";

      return false;
    }
  });

  // Events for the Template named 'task'
  Template.task.events({
    // When a '.toggle-checked' element is clicked
    "click .toggle-checked": function() {
      Tasks.update(this._id, {$set: {checked: !this.checked}});
    },

    // When a '.delete' element is clicked
    "click .delete": function(){
      Tasks.remove(this._id);
    }
  });
}
