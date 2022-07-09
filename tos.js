const data = [
  {theme: "Server", desc: "Your server must be against these things<br>homophobia,<br>racism,<br>sexism<br>transophobia<br>The username of the bot in your server must not be in these topics<br>sexist,<br>racist,<br>homophobic<br>transophobic<br>Your server must not contain any of theses topic in their bio<br> homophobia,<br>racism,<br>nazism,<br>sexism,<br>transophobia<br>The owner must respect the tos and the server too"},
  {theme: "Data", desc: "The data we take is only server name, id and messages to process commands, they aren't saved, we also saves guild name and id to automod them, the bot post a message with the server name as content so we can know if the server name is something bad like \"Homphobia-land\" to make the bot leave that, the bot will reach the id and put it on the \"Do not join list\"<br>That's all the data we save and when the name is verified we just delete the message so the data is not conserved anymore"}
];

for (let i = 0; i < data.length; i++) {
  console.log(data[i].theme);
  var da = data[i]
  document.getElementById('tos').innerHTML += '<h1>' + da.theme + '</h1>' + '<p>' + da.desc + '</p>';
}
