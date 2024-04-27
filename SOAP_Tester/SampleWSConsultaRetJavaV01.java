package com.efactura ;
import com.efactura.*;
import java.sql.*;
import com.genexus.db.*;
import com.genexus.*;
import com.genexus.search.*;

public final  class samplewsconsultaretjavav01 extends GXProcedure
{
   public static void main( String args[] )
   {
      Application.init(com.efactura.GXcfg.class);
      samplewsconsultaretjavav01 pgm = new samplewsconsultaretjavav01 (-1);
      Application.realMainProgram = pgm;
      pgm.executeCmdLine(args);
      GXRuntime.exit( );
   }

   public void executeCmdLine( String args[] )
   {

      execute();
   }

   public samplewsconsultaretjavav01( )
   {
      super( -1 , new ModelContext( samplewsconsultaretjavav01.class ), "" );
      Application.init(com.efactura.GXcfg.class);
   }

   public samplewsconsultaretjavav01( int remoteHandle )
   {
      super( remoteHandle , new ModelContext( samplewsconsultaretjavav01.class ), "" );
   }

   public samplewsconsultaretjavav01( int remoteHandle ,
                                      ModelContext context )
   {
      super( remoteHandle , context, "" );
   }

   public void execute( )
   {
      execute_int();
   }

   private void execute_int( )
   {
      initialize();
      /* GeneXus formulas */
      /* Output device settings */
      context.globals.nSOAPErr = (short)(0) ;
      context.globals.sSOAPErrMsg = "" ;
      GXSoapHTTPClient.setHost( httpContext.getServerName( ) );
      GXSoapHTTPClient.setPort( httpContext.getServerPort( ) );
      GXSoapHTTPClient.setBaseURL( httpContext.getScriptPath( ) );
      SoapParm.assignlocationproperties( context, "ASampleWSConsultaRetJavaV01", GXSoapHTTPClient);
      GXSoapHTTPClient.addHeader("Content-type", "text/xml;charset=utf-8");
      GXSoapHTTPClient.addHeader("Connection", "close");
      GXSoapHTTPClient.addHeader("SOAPAction", "eFacturaaction/"+"ASAMPLEWSCONSULTARETJAVAV01.Execute");
      GXSoapXMLWriter.openRequest(GXSoapHTTPClient);
      GXSoapXMLWriter.writeStartDocument("utf-8", (byte)(0));
      GXSoapXMLWriter.writeStartElement("SOAP-ENV:Envelope");
      GXSoapXMLWriter.writeAttribute("xmlns:SOAP-ENV", "http://schemas.xmlsoap.org/soap/envelope/");
      GXSoapXMLWriter.writeAttribute("xmlns:xsd", "http://www.w3.org/2001/XMLSchema");
      GXSoapXMLWriter.writeAttribute("xmlns:SOAP-ENC", "http://schemas.xmlsoap.org/soap/encoding/");
      GXSoapXMLWriter.writeAttribute("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
      GXSoapXMLWriter.writeStartElement("SOAP-ENV:Body");
      GXSoapXMLWriter.writeElement("Execute", "");
      GXSoapXMLWriter.writeAttribute("xmlns", "eFactura");
      GXSoapXMLWriter.writeEndElement();
      GXSoapXMLWriter.writeEndElement();
      GXSoapXMLWriter.close();
      GXSoapHTTPClient.execute("POST", "com.efactura.asamplewsconsultaretjavav01");
      if ( GXSoapHTTPClient.getErrCode() != 0 )
      {
         currSoapErr = (short)(GXSoapHTTPClient.getErrCode()*-1-10000) ;
         currSoapErrmsg = GXSoapHTTPClient.getErrDescription() ;
      }
      GXSoapXMLReader.openResponse(GXSoapHTTPClient);
      GXSoapError = GXSoapXMLReader.read() ;
      while ( GXSoapError > 0 )
      {
         if ( GXutil.strSearch( GXSoapXMLReader.getName(), "Body", 1) > 0 )
         {
            if (true) break;
         }
         GXSoapError = GXSoapXMLReader.read() ;
      }
      if ( GXSoapError > 0 )
      {
         GXSoapError = GXSoapXMLReader.read() ;
         if ( ( GXSoapError > 0 ) && ( GXutil.strcmp(GXSoapXMLReader.getLocalName(), "Fault") == 0 ) )
         {
            soapFault = (short)(1) ;
         }
      }
      formatError = false ;
      GXSoapXMLReader.close();
      if ( currSoapErr == 0 )
      {
         if ( GXSoapError < 0 )
         {
            currSoapErr = (short)(GXSoapError*-1) ;
            currSoapErrmsg = context.globals.sSOAPErrMsg ;
         }
         else
         {
            if ( GXSoapXMLReader.getErrCode() > 0 )
            {
               currSoapErr = (short)(GXSoapXMLReader.getErrCode()*-1) ;
               currSoapErrmsg = GXSoapXMLReader.getErrDescription() ;
            }
            else
            {
               if ( GXSoapError == 0 )
               {
                  currSoapErr = (short)(-20001) ;
                  currSoapErrmsg = "Malformed SOAP message." ;
               }
               else
               {
                  currSoapErr = (short)(0) ;
                  currSoapErrmsg = "No error." ;
               }
            }
         }
      }
      if ( currSoapErr != 0 )
      {
         oLocation = SoapParm.getlocation(context, "ASampleWSConsultaRetJavaV01") ;
         if ( oLocation.getCancelOnError() == 1 )
         {
            throw new RuntimeException(currSoapErrmsg + "(" + currSoapErr+ ")");
         }
      }
      context.globals.nSOAPErr = currSoapErr ;
      context.globals.sSOAPErrMsg = currSoapErrmsg ;
      cleanup();
   }

   protected void cleanup( )
   {
      CloseOpenCursors();
      Application.cleanup(context, this, remoteHandle);
   }

   protected void CloseOpenCursors( )
   {
   }

   /* Aggregate/select formulas */
   public void initialize( )
   {
      GXSoapHTTPClient = new com.genexus.internet.HttpClient();
      sReturn = "" ;
      GXSoapXMLReader = new com.genexus.xml.XMLReader();
      GXSoapXMLWriter = new com.genexus.xml.XMLWriter();
      currSoapErrmsg = "" ;
      oLocation = new com.genexus.internet.Location();
      /* GeneXus formulas. */
      Gx_err = (short)(0) ;
   }

   private short GXSoapError ;
   private short currSoapErr ;
   private short soapFault ;
   private short readOk ;
   private short Gx_err ;
   private String sReturn ;
   private String currSoapErrmsg ;
   private boolean readElement ;
   private boolean formatError ;
   private com.genexus.xml.XMLWriter GXSoapXMLWriter ;
   private com.genexus.xml.XMLReader GXSoapXMLReader ;
   private com.genexus.internet.Location oLocation ;
   private com.genexus.internet.HttpClient GXSoapHTTPClient ;
}

