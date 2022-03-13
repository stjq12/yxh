package yxh;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class pub_fun {
	public static Connection getConnection() {
		String driver = "com.mysql.cj.jdbc.Driver";
//		String url = "jdbc:mysql://localhost:3306/z_web";
		String url = "jdbc:mysql://localhost:3306/yxh?useSSL=true&serverTimezone=GMT";

		Connection con = null;
		try {
			Class.forName(driver);
			try {
				con = DriverManager.getConnection(url, "root", "12345678");
			} catch (SQLException e) {
				e.printStackTrace();
			}
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		return con;
	};
}
