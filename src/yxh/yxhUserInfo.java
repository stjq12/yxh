package yxh;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class yxhUserInfo
 */
@WebServlet("/yxhUserInfo")
public class yxhUserInfo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public yxhUserInfo() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("getuserinfo");

		String userid = request.getParameter("userid");

		Connection conn = pub_fun.getConnection();
		String Sql_login = "select * from user where userid = '" + userid + "'";
		String str = "[";
		System.out.println(Sql_login);
		
		try {
			PreparedStatement pstat = conn.prepareStatement(Sql_login);
			ResultSet rs = (ResultSet) pstat.executeQuery();
			while (rs.next()) {
				str = str + "{\"userName\":\"" + rs.getString("userName") + "\",";
				str = str + "\"say\":\"" + rs.getString("say") + "\",";
				str = str + "\"attention\":\"" + rs.getString("attention") + "\",";
				str = str + "\"fans\":\"" + rs.getString("fans") + "\",";
				str = str + "\"collect\":\"" + rs.getString("collect") + "\",";
				str = str + "\"history\":\"" + rs.getString("history") + "\"}]";
				
				response.getWriter().write(str);
			}
			pstat.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
