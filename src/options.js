// Saves options to chrome.storage
function save_options() {
  var speava_session_record = document.getElementById('speava_session_record').value;
  var speava_session_spreadsheet_post = document.getElementById('speava_session_spreadsheet_post').value;
  var speava_session_username = document.getElementById('speava_session_username').value;
  var speava_session_log_string = document.getElementById('speava_session_log_string').value;
  var speava_session_send_raw = document.getElementById('speava_session_send_raw').checked;
  var speava_session_post = document.getElementById('speava_session_post').checked;
  var speava_session_show = document.getElementById('speava_session_show').checked;
  var speava_session_notification = document.getElementById('speava_session_notification_option').checked;
  var speava_session_unrecognized = document.getElementById('speava_session_unrecognized').checked;
  chrome.storage.sync.set({
    speava_session_record: speava_session_record,
    speava_session_spreadsheet_post: speava_session_spreadsheet_post,
    speava_session_username:speava_session_username,
    speava_session_log_string : speava_session_log_string,
    speava_session_send_raw : speava_session_send_raw,
    speava_session_post : speava_session_post,
    speava_session_show : speava_session_show,
    speava_session_notification : speava_session_notification,
    speava_session_unrecognized : speava_session_unrecognized
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    speava_session_record: 'enter URL',
    speava_session_spreadsheet_post: 'enter URL',
    speava_session_username: 'Default user',
    speava_session_log_string: 'Wonder,Mistakes',
    speava_session_send_raw: false,
    speava_session_post: false,
    speava_session_show: false,
    speava_session_notification: false,
    speava_session_unrecognized: false
  }, function(items) {
    document.getElementById('speava_session_record').value = items.speava_session_record;
    document.getElementById('speava_session_spreadsheet_post').value = items.speava_session_spreadsheet_post;
    document.getElementById('speava_session_username').value = items.speava_session_username;
    document.getElementById('speava_session_log_string').value = items.speava_session_log_string;
    document.getElementById('speava_session_send_raw').checked = items.speava_session_send_raw;
    document.getElementById('speava_session_post').checked = items.speava_session_post;
    document.getElementById('speava_session_show').checked = items.speava_session_show;
    document.getElementById('speava_session_notification_option').checked = items.speava_session_notification;
    document.getElementById('speava_session_unrecognized').checked = items.speava_session_unrecognized;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);