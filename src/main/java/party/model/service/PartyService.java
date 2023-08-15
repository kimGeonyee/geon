package party.model.service;

import java.sql.Connection;

import party.model.dao.PartyDao;
import party.model.vo.Party;

import static common.JDBCTemplate.*;

public class PartyService {
	
	private PartyDao dao = new PartyDao();
	
	public PartyService() {}
	
	public Party selectParty(int partyid) {
		Connection conn = getConnection();
		Party party = dao.selectParty(conn, partyid);
		close(conn);
		return party;
	}
	
	public void insertParty() {
		
	}
	
}
