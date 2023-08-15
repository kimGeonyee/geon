package party.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import party.model.vo.Party;

import static common.JDBCTemplate.*;

public class PartyDao {
	
	public PartyDao() {}
	
	public Party selectParty(Connection conn, int partyid) {
		
		Party party = null;
		PreparedStatement ptst = null;
		ResultSet rset = null;
		
		try {
			
			String query = "select * from party where partyid=?";
			ptst = conn.prepareStatement(query);
			ptst.setInt(1, partyid);
			
			rset = ptst.executeQuery();
			
			if(rset.next()) {
				party = new Party();
				
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			close(ptst);
			close(rset);
		}
		
		return party;
	}
}
