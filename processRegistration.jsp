<%@ include file="includes/connection.jsp" %>

<%

String name = request.getParameter("name");
String email = request.getParameter("email");
String pass = request.getParameter("pass");
String cpass = request.getParameter("cpass");

if (pass == null || !(pass.equals("")) || pass.equals(cpass)){
	session.setAttribute("status", "Password Doesnot Match / Invalid Password");
	redirectURL = "register.jsp";	
	//response.setHeader("Location", redirectURL);
	response.sendRedirect(redirectURL);
    return;
}

String query1 = "SELECT email FROM users WHERE email=?";
PreparedStatement stmt1 = (PreparedStatement) conn.prepareStatement(query1);
stmt1.setString(1,email);
ResultSet rSet = stmt1.executeQuery();

if(rSet.next()){
	session.setAttribute("status", "Email is Already Registered");
	redirectURL = "register.jsp";	
    //response.setHeader("Location", redirectURL);
    response.sendRedirect(redirectURL);
    return;
}

String query2 = "INSERT INTO users (name, email, pass) VALUES (?,?,?)";
PreparedStatement stmt2 = (PreparedStatement) conn.prepareStatement(query2);
stmt2.setString(1,name);
stmt2.setString(2,email);
stmt2.setString(3,pass);

int r = stmt2.executeUpdate();

if(r != 0){
	session.setAttribute("status", "Account Successfully Created. <a href='login.jsp'>Login</a>");
	redirectURL = "register.jsp";	
	//response.setHeader("Location", redirectURL);
	response.sendRedirect(redirectURL);
    return;
}
else{
	session.setAttribute("status", "Error During Account Creation.");
	
}

conn.close();

redirectURL = "register.jsp";
//response.setHeader("Location", redirectURL);
response.sendRedirect(redirectURL);

%>
