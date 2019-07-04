<%@ include file="includes/connection.jsp" %>

<%

String email = request.getParameter("email");
String pass = request.getParameter("pass");

String query1 = "SELECT name FROM users WHERE email=? and pass=?";
PreparedStatement stmt1 = (PreparedStatement) conn.prepareStatement(query1);
stmt1.setString(1,email);
stmt1.setString(2,pass);
ResultSet rSet = stmt1.executeQuery();

if(rSet.next()){
	session.setAttribute("status", "");
	session.setAttribute("accessLevel", "1");
	session.setAttribute("userName", rSet.getString("name"));
	redirectURL = "dashboard.jsp";	
    //response.setHeader("Location", redirectURL);
    response.sendRedirect(redirectURL);
    return;
}
else{
	session.setAttribute("status", "Email / Password Incorrect");
	session.setAttribute("accessLevel", "0");
	session.setAttribute("userName", "Guest");
	conn.close();	
}
redirectURL = "login.jsp";	
//response.setHeader("Location", redirectURL);
response.sendRedirect(redirectURL);

%>
