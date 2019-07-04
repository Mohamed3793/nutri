<%@ include file="includes/connection.jsp" %>

<%

session.setAttribute("status", "");
session.setAttribute("accessLevel", "0");
session.setAttribute("userName", "Guest");

conn.close();

redirectURL = "index.jsp";	
//response.setHeader("Location", redirectURL);
response.sendRedirect(redirectURL);

%>

