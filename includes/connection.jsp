<%@ page import="java.io.*,java.util.*" %>
<%@ page import="java.sql.*" %>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.Statement" %>
<%@ page import="java.sql.ResultSet" %>
<%@ page language="java" contentType="text/html" %>

<%

if (session.isNew() ){	
	session.setAttribute("userName", "Guest");
	session.setAttribute("accessLevel", "0");
	session.setAttribute("status", "");
}

String redirectURL = "register.jsp";

Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
Connection conn;
conn = (Connection) DriverManager.getConnection("jdbc:mysql://localhost:3306/nutritrack?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC","root","admin");

%>
