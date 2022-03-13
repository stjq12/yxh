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
 * Servlet implementation class mesList
 */
@WebServlet("/mesList")
public class mesList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public mesList() {
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
		System.out.println("using");
		response.setContentType("text/json;charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("utf-8");

		Connection conn = pub_fun.getConnection();
		String sql = "select * from mesList";
		String str = "[";

		try {
			PreparedStatement pstat = conn.prepareStatement(sql);
			ResultSet rs = (ResultSet) pstat.executeQuery();
			while (rs.next()) {
				str = str + "{\"id\":\"" + rs.getString("id") + "\",";
				str = str + "\"head\":\"" + rs.getString("head") + "\",";
				str = str + "\"userName\":\"" + rs.getString("userName") + "\",";
				str = str + "\"detail\":\"" + rs.getString("detail") + "\",";
				str = str + "\"pic1\":\"" + rs.getString("pic1") + "\",";
				str = str + "\"pic2\":\"" + rs.getString("pic2") + "\",";
				str = str + "\"pic3\":\"" + rs.getString("pic3") + "\",";
				str = str + "\"share\":\"" + rs.getString("share") + "\",";
				str = str + "\"comment\":\"" + rs.getString("comment") + "\",";
				str = str + "\"like\":\"" + rs.getString("like") + "\"},";
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
