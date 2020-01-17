function prev()
{
  var x = document.getElementsByTagName("div")[1].id;
  var y = p(x);
  document.getElementsByTagName("div")[1].id = y;
  x=document.getElementsByTagName("div")[1];
  if(x.className == "s")
  {
    x.className = "s1";
    x.id = (y);
  }
  else
  {
    x.className = "s";
    x.id = (y);
  }
  x=document.getElementsByTagName("div")[0];
  if(x.className == "slider left")
  {
    x.className = "slider left1";
    x.id = (y);
  }
  else
  {
    x.className = "slider left";
    x.id = (y);
  }
  x=document.getElementsByTagName("div")[2];
  if(x.className == "slider right")
  {
    x.className = "slider right1";
    x.id = n(y);
  }
  else
  {
    x.className = "slider right";
    x.id = n(y);
  }
  x=document.getElementsByTagName("div")[3];
  if(x.className == "slider l1")
  {
    x.className = "slider l11";
    x.id = p(y);
  }
  else
  {
    x.className = "slider l1";
    x.id = p(y);
  }
  x=document.getElementsByTagName("div")[4];
  if(x.className == "slider r1")
  {
    x.className = "slider r11";
    x.id = p(p(y));
  }
  else
  {
    x.className = "slider r1";
    x.id = p(p(y));
  }
}
function next()
{
  var x = document.getElementsByTagName("div")[1].id;
  var y = n(x);
  document.getElementsByTagName("div")[1].id = y;
  x=document.getElementsByTagName("div")[1];
  if(x.className == "s")
  {
    x.className = "s1";
    x.id = (y);
  }
  else
  {
    x.className = "s";
    x.id = (y);
  }
  x=document.getElementsByTagName("div")[0];
  if(x.className == "slider right11")
  {
    x.className = "slider right111";
    x.id = y;
  }
  else
  {
    x.className = "slider right11";
    x.id = y;
  }
  x=document.getElementsByTagName("div")[2];
  if(x.className == "slider left11")
  {
    x.className = "slider left111";
    x.id = p(y);
  }
  else
  {
    x.className = "slider left11";
    x.id = p(y);
  }
  x=document.getElementsByTagName("div")[3];
  if(x.className == "slider l111")
  {
    x.className = "slider l1111";
    x.id = p(p(y));
  }
  else
  {
    x.className = "slider l111";
    x.id = p(p(y));
  }
  x=document.getElementsByTagName("div")[4];
  if(x.className == "slider r111")
  {
    x.className = "slider r1111";
    x.id = p(p(p(y)));
  }
  else
  {
    x.className = "slider r111";
    x.id = p(p(p(y)));
  }
}
function n(c)
{
    if(c=="d")
    return "a";
    return String.fromCharCode(c.charCodeAt(0) + 1);
}
function p(c)
{
    if(c=="a")
    c="e";
    return String.fromCharCode(c.charCodeAt(0) - 1);
}
