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
 * Servlet implementation class xwList
 */
@WebServlet("/xwList")
public class xwList extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public xwList() {
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
		// TODO Auto-generated method stub
		System.out.println("using");
		response.setContentType("text/json;charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("utf-8");

		Connection conn = pub_fun.getConnection();
		String sql = "select * from xwList";
		String str = "[";

		try {
			PreparedStatement pstat = conn.prepareStatement(sql);
			ResultSet rs = (ResultSet) pstat.executeQuery();
			while (rs.next()) {
				str = str + "{\"title\":\"" + rs.getString("title") + "\",";
				str = str + "\"id\":\"" + rs.getString("id") + "\",";
				str = str + "\"type\":\"" + rs.getString("type") + "\",";
				str = str + "\"comment\":\"" + rs.getString("comment") + "\",";
				str = str + "\"pic\":\"" + rs.getString("pic") + "\"},";
			}
			str = str + "]";
			str = str.replace("},]", "}]");
			response.getWriter().write(str);

			pstat.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
