INSERT INTO leads (id, email, amount, contacted, created_at) VALUES
  (2, 'wandeldivedro@gmail.com', 300000, 1, '2026-05-13 23:30:16'),
  (4, 'deldivedro@yahoo.com.ar', 500000, 0, '2026-05-13 23:48:14')
ON DUPLICATE KEY UPDATE
  email = VALUES(email),
  amount = VALUES(amount),
  contacted = VALUES(contacted),
  created_at = VALUES(created_at);

ALTER TABLE leads AUTO_INCREMENT = 5;
