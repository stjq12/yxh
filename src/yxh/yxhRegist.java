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
 * Servlet implementation class yxhRegist
 */
@WebServlet("/yxhRegist")
public class yxhRegist extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public yxhRegist() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("regist");

		String openid = request.getParameter("openid");
		String userName = request.getParameter("userName");
		String pwd = request.getParameter("pwd");

		String sql = "insert into user(openid,userName,pwd)";
		sql += " values(?,?,?)";

		Connection conn = pub_fun.getConnection();

		try {
			PreparedStatement stmt = conn.prepareStatement(sql);
			stmt = conn.prepareStatement(sql);
			stmt.setNString(1, openid);
			stmt.setNString(2, userName);
			stmt.setNString(3, pwd);
			stmt.executeUpdate();

			stmt.close();
			conn.close();

			response.getWriter().write("{\"code\":\"200\"}");

		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
