CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS contact_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(150),
  phone VARCHAR(40),
  industry VARCHAR(120),
  device_count INTEGER CHECK (device_count IS NULL OR device_count > 0),
  message TEXT NOT NULL CHECK (char_length(message) BETWEEN 10 AND 2000),
  status VARCHAR(30) NOT NULL DEFAULT 'new',
  admin_email_sent BOOLEAN NOT NULL DEFAULT FALSE,
  auto_reply_sent BOOLEAN NOT NULL DEFAULT FALSE,
  email_error TEXT,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_requests_created_at
  ON contact_requests (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_requests_email
  ON contact_requests (email);

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_contact_requests_updated_at ON contact_requests;

CREATE TRIGGER trg_contact_requests_updated_at
BEFORE UPDATE ON contact_requests
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();
